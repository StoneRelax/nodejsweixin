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
	console.log("getTulingRes got the input  "+info);
	var infolist = {
		"key":"config.tulingkey",
		"info":info
	};
	console.log("infolist: "+infolist);
	var options = {
	method:'POST',
	url:config.tulingapi,
	headers:{
	'content-type': "application/json"
		},
	body:Json.stringify(infolist)
	};
	console.log(options);
	console.log('now sending api to tuling');	
	request(options,function(err,res,body){
		var strbody = Json.parse(body);
		console.log("get response text from tuling :"+strbody);
		return strbody.text;
		});
}

module.exports = autoreply;
