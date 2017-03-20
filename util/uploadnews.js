/* jshint node:true */
"use strict";

var request = requrie('request');
const news = require('./news');
const token = fs.readFileSync('./access_token');

var opts = {
	url : 'https://api.weixin.qq.com/cgi-bin/material/add_news?access_token='+token,
	method : 'POST',
	body : JSON.stringify(news)
};

request(opts,function(err,res,data){
	console.log(JSON.parse(data);
});