/* jslint node:true */
"use strict";
var getTulingRes = require("./getTulingRes.js");
var createresmsg = require("./createresmsg.js");

/** 
 * [POST "/" use tuling robot api ]
 * @param  {http req} req ["standard http req"]
 * @param  {http req} res ["standard http res"]
 * @return {[type]}     [description]
 */
function autoreply(req,res){
	console.log('starting parsing');
	var msgstr = req.body.xml.content;
	var msgtype = req.body.xml.msgtype.toString();
	var reqxml = req.body.xml;
	var fromuser = reqxml.fromusername;
	var touser = reqxml.tousername;
	console.log('msgtype is '+msgtype);
	switch(msgtype){
		case 'text' : 
			getTulingRes(msgstr,fromuser).then(function(body){
			var strbody = JSON.parse(body);
			console.log(strbody);
			var resmsg = createresmsg(strbody,reqxml);
			res.end(resmsg);
			});
			break;
		case 'image' : 
			res.end('<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[机器人不接受斗图哦]]></Content></xml>');
			break;
		case 'voice' : 
			res.end('<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[机器人不接受语音撩拨哦]]></Content></xml>');
			break;

		default : 
			res.end('<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[请输入正常的消息哦]]></Content></xml>');
	}
}

module.exports = autoreply;
