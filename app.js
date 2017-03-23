var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var weixinserver = require('./routes/weixinServer/index.js');
var verifyweixinrequest = require('./util/verifyweixinrequest.js');
var hello = require('./routes/site/index.js');

var savetoken = require('./util/getaccesstoken.js');
//savetoken();
var expire = JSON.parse(fs.readFileSync('./util/access_token_expire')).time;
setInterval(function(){
	savetoken();
},expire*1000);

var app = express();
var xmlparser = require('express-xml-bodyparser');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',xmlparser({type: 'text/xml'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var weixiniplist = fs.readFileSync('./util/weixiniplist').toString().split(",");
app.use('/weixinserver',verifyweixinrequest);
app.use('/weixinserver', weixinserver);
app.use('/',hello);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8000);

module.exports = app;
