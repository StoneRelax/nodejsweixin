/* jshint node:true */
"use strict";

var request = require('request');
var fs = require('fs');
var q = require('q');

const token = fs.readFileSync('./access_token');
const menulist = require('./menulist.js');

function deletemenulist(){
	var defer = q.defer();
	var url = 'https://api.weixin.qq.com/cgi-bin/menu/delete?access_token='+token;
	request(url,function(err,res,body){
		if(err){
			console.log(err);
			defer.reject(err);
		} else if(res){
			defer.resolve(body);
		}
	});
	return defer.promise;
}

function uploadmenulist(){
	var urlstr = 'https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+token;
	var opt = {
		method: 'POST',
		url: urlstr,
		body: JSON.stringify(menulist)
	};
	request(opt,function(err,res,body){
		if (err) {
			console.log(err);
		} else {
			var bodystr = JSON.parse(body);
			if(bodystr.errcode === 0){
				console.log('successfully updated menu list');
			} else {
				console.log('failed to updated menu list , errcode :' + bodystr.errcode + 'err msg : ' + bodystr.errmsg);
			}
		}
	});
}

deletemenulist().then(function(data){
	var datastr = JSON.parse(data);
	if(datastr.errcode === 0){
		uploadmenulist();
	}
});