/* jshint node:true */
"use strict";
var fs = require('fs');
var request = require('request');
var news = fs.readFileSync('./news').toString();
var picid = JSON.parse(fs.readFileSync('./piclist.txt')).media_id;

const token = fs.readFileSync('./access_token');
var opts = {
	url : 'https://api.weixin.qq.com/cgi-bin/material/add_news?access_token='+token,
	method : 'POST',
	body : news 
};

request(opts,function(err,res,data){
	console.log(JSON.parse(data));
});
