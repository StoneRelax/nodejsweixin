/* jshint node:true */
"use strict";
var util = require('util');

function getremoteip(req){
	var remoteip ;
	var headers = req.headers;
	var isforward = headers['x-real-ip'] || headers['x-forwarded-for'];
	isforward ? remoteip=isforward : remoteip=req.connection.remoteAddress.split(":")[3];
	return remoteip;
}

module.exports = getremoteip;
