/* jshint node:true */
"use strict";

var request = require('request');
var fs = require('fs');

function getweixinip(){
	var accesstoken = fs.readFileSync('./access_token');
	var url = 'https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token='+accesstoken;
	request(url,function(err,res,body){
		if(err){
			console.log("error when requesting weixin ip");
			process.abort();
		} else {
			var bodystr = JSON.parse(body);
			console.log(bodystr);
			var iplist = bodystr.ip_list;
			fs.writeFileSync('./weixiniplist',iplist);
		}
	});
}

getweixinip();
