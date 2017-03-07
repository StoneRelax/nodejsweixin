/* jslint node:true */
"use strict";
const request = require('request');
const config = require('../config.js');

function autoreply(req,res){
	console.log('starting parsing');
	var reqxml = req.body.xml.content;
	console.log(reqxml);
	//var codedcontent = encodeURI(reqxml);
	//console.log(condedcontent);
	var tulingsaysJson = getTulingRes(reqxml); 
	var tulingsay = Json.parse(tulingsaysJson);
	console.log("tuling returns string"+tulingsay);
	res.end('<xml><ToUserName><![CDATA['+req.body.xml.fromusername+']]></ToUserName><FromUserName><![CDATA['+req.body.xml.tousername+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+tulingsays+']]></Content></xml>');
}
function getTulingRes(info){
	console.log("getTulingRes got the input  "+info);
	var options = {
	method:'GET',
	url:config.tulingapi+"?key="+config.tulingkey,
	headers:{
	'apikey': config.tulingkey
		}
	}	
	console.log(options);
	console.log('now sending api to tuling');	
	request(options,function(err,res,body){
		console.log(body.text);
		return body.text;
		});
}

module.exports = autoreply;
