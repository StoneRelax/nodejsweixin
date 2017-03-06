var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const url = require('url');
const path = require('path');
const config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', { title: 'Express' });
	var query = url.parse(req.url,true).query;
	var sig = query.signature;
	var echostr = query.echostr;
	var timestamp = query['timestamp'];
	var nonce = query.nonce;
	var reqArray = [nonce,timestamp,config.token];
	reqArray.sort();
	var sortstr = reqArray.join('');
	var shasum = crypto.createHash("sha1");
	shasum.update(sortstr);
	var resultstr = shasum.digest("hex");

	if(sig === resultstr){
	res.end(echostr);
	}else{
		res.end("false");
		console.log("sig="+sig+"  timestamp="+timestamp+"  nonce="+nonce+"  echostr="+echostr+"  token="+config.token);
	}
*/
});

module.exports = router;
