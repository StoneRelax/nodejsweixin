/* jslint node:true */
"use strict";
const request = require('request');
const config = require('../config.js');

function autoreply(req,res){
	console.log('starting parsing');
	var infostr = req.body.xml.content;
	console.log(infostr);
	//var codedcontent = encodeURI(reqxml);
	//console.log(condedcontent);
	var tulingsays = getTulingRes(infostr); 
	res.end('<xml><ToUserName><![CDATA['+req.body.xml.fromusername+']]></ToUserName><FromUserName><![CDATA['+req.body.xml.tousername+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+tulingsays+']]></Content></xml>');
}
function getTulingRes(info){
	info = info.toString();
	console.log("getTulingRes got the input  "+info);
	var infolist = {
		key:config.tulingkey,
		info:info
	};
	console.log("infolist: "+JSON.stringify(infolist));
	var options = {
	method:'POST',
	url:config.tulingapi,
	headers:{
	'content-type': "application/json"
		},
	body:JSON.stringify(infolist)
	};
	console.log(options);
	console.log('now sending api to tuling');	
	request(options,function(err,res,body){
		var strbody = JSON.parse(body);
		console.log("get response text from tuling :"+strbody.code+"   "+strbody.text);
		return strbody.text;
		});
}

module.exports = autoreply;
