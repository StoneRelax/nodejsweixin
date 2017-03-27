/* jshint node:true */
"use strict";

var request = require('request');
var fs = require('fs');
var redisdb = require('./redisdb.js');

function getweixinip(){
	redisdb.get('access_token',function(err,accesstoken){
	console.log(accesstoken);	
	var url = 'https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token='+accesstoken;
	request(url,function(err,res,body){
		if(err){
			console.log("error when requesting weixin ip");
			process.abort();
		} else {
			var bodystr = JSON.parse(body);
			var iplist = bodystr.ip_list.join().replace(/\/2[1-9]/g,"");
			redisdb.set('weixiniplist',iplist,redisdb.print);
		}
	});
});
}

getweixinip();
