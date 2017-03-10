/* jshint node:true */
"use strict";
var request = require('request');
var q = require('q');
var fs = require('fs');
const config = require('./config.js');

function gettoken(){
	var defer = new q.defer();
	request("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid"+config.appid+"&secret"+config.appsecret,function(err,res,body){
		if(err){
			defer.reject(err);
		} else if(res){
			defer.resolve(body);
		}
	});
	return defer.promise;
}

function savetoken(){
	gettoken().then(function(body){
		var bodystr = JSON.parse(body);
		console.log(bodystr);
		fs.writeFile('./access_token', bodystr.access_token);
		setTimeout(savetoken(), bodystr.expires_in * 1000);
	});
}
savetoken();

module.exports = savetoken;
