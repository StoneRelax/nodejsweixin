/* jshint node:true */
"use strict";
var request = require('request');
var q = require('q');
var fs = require('fs');
const config = require('./config.js');

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
		fs.writeFile('./access_token',bodystr.access_token);
		var expire = {};
		expire.time = bodystr.expires_in;
		fs.writeFile('./acccess_token_expire', JSON.stringify(expire));
	});
}





module.exports = getaccesstoken; 
