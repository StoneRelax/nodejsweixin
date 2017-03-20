/* jshint node:true */
"use strict";

var fs = require('fs');
var request = require('request');
var news= JSON.parse(fs.readFileSync('./newslist.js'));
console.log(news+"||"+news.media_id);
const token = fs.readFileSync('./access_token');
var bodyjson = {
   "filter":{
      "is_to_all":true
   },
   "mpnews":{
      "media_id":news.media_id
   },
    "msgtype":"mpnews"
};

var opts = {
	url : 'https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token='+token,
	method : "POST",
	body : JSON.stringify(bodyjson)
};

request(opts,function(err,res,data){
	console.log(JSON.parse(data));
});
