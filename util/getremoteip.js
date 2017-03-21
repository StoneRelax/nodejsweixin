/* jshint node:true */
"use strict";

module.exports=function getremoteip(req){
	var remoteip ;
	var isforward = req.headers['x-real-ip'] || req.headers['x-forwarded-for'];
	isforward ? remoteip=isforward : remoteip=req.connection.remoteAddress;
	return remoteip;
}