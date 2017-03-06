/* jslint node:true */
"use strict";

function autoreply(req,res){
	console.log('starting parsing');
	console.log("body.xml"+req.body.xml);
	var reqxml = req.body.xml.content;
	console.log(reqxml);
	res.end('<xml><ToUserName><![CDATA['+req.body.xml.fromusername+']]></ToUserName><FromUserName><![CDATA['+req.body.xml.tousername+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+reqxml+']]></Content></xml>');
}

module.exports = autoreply;
