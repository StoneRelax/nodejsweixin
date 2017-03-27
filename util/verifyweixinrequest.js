/* jshint node:true */
"use strict";
var getremoteip = require('./getremoteip.js');
var fs = require('fs');
var express = require('express');
var router = express.Router();
var redisdb = require('./redisdb.js');

router.get('/',function(req,res,next){
	verifyweixinrequest(req,res,next);
});
router.post('/',function(req,res,next){
	verifyweixinrequest(req,res,next);
});


function verifyweixinrequest(req,res,next){
	var incomingip = getremoteip(req);
	var authorized = 0;
	redisdb.get('weixiniplist',function(err,iplist){
	var weixiniplist = iplist.split(",");		
	for(var i=0;i<weixiniplist.length;i++){
		//console.log(weixiniplist[i]+":"+incomingip);
		//console.log(index + ":" + element);
		if(weixiniplist[i] === incomingip){
			console.log('confirm come from official server ,proceed');
			authorized = 1;
			console.log('authorized');
			break;
		}
	};
	if(authorized){
		next();
	} else {
		console.log('unauthorized');
		var error = new Error('requesting weixin service but not from an official weixin server');
		next(error);
	}		
	});
}
module.exports = router;
