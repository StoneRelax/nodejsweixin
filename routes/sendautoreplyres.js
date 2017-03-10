/* jshint node:true */
"use strict";
/** 
 * [Send out response that was processed by tuling robot]
 * @param  {map[string,string]} data [the response body]
 * @param  {map[string,string]} reqxml [http request infos]
 */
function createresmsg(data,reqxml){
	var fromuser = reqxml.FromUserName;
	var touser = reqxml.ToUserName;
	var resmsg;
	switch(data.code){
		case("1000000"): {
			resmsg = '<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+data.text+']]></Content></xml>';
			break;
		}

		case("200000") : {
			resmsg = '<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+data.text+"\n"+data.url+']]></Content></xml>';
			break;
		}

		case("302000") : {
			resmsg = '<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA['+data.text+"\n"+data.list[0].article+"\n"+data.list[0].source+"\n"+data.list[0].detailurl+']]></Content></xml>';
			break;
		}
		default : 
			resmsg = '<xml><ToUserName><![CDATA['+fromuser+']]></ToUserName><FromUserName><![CDATA['+touser+']]></FromUserName><CreateTime>'+parseInt(new Date())+'</CreateTime><MsgType><![CDATA[text]]></MsgType><Content><![CDATA[机器人暂时还没有这个功能哟,爱你]]></Content></xml>';
		}
	return resmsg;
}

module.exports = createresmsg;