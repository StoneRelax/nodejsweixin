/* jshint node:true */
"use strict";
var request = require('request');
var q = require('q');
var fs = require('fs');
var config = require('../config');
var redisdb = require('./redisdb.js');

function getaccesstoken(){
	var defer = new q.defer();
	var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+config.appid+"&secret="+config.appsecret;
	console.log(url);
	request(url,function(err,res,body){
		if(err){
			defer.reject(err);
			console.log(err);
		} else if(res){
			defer.resolve(body);
		}
	});
	var connection = defer.promise;
	connection.then(function(body){
		var bodystr = JSON.parse(body);
		console.log(bodystr);
		redisdb.set("access_token",bodystr.access_token.toString());
		//fs.writeFile('./util/access_token',bodystr.access_token);
		redisdb.set("access_token_expire",bodystr.expires_in.toString(),redisdb.print);
		//fs.writeFile('./util/access_token_expire', JSON.stringify(expire));
	});
}





module.exports = getaccesstoken; 
