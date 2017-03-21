/* jshint node:true */
"use strict";

var getremoteip = require('./util/getremoteip');

function verifyweixinrequest(weixiniplist,req,res,next){
	var incomingip = getremoteip(req);
	weixiniplist.forEach(function(weixinip){
		if(weixinip === incomingip){
			next();
		}
	});

	var error = new Error('requesting weixin service but requester is not weixin official server');
	error.is404 = true;
	next(error);
	
}