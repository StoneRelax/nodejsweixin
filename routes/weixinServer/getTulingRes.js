/* jshint node:true */
"use strict";
var Q = require("q");
var request = require("request");
const config = require("../config.js");


/** 
 * [use Tuling robot api ]
 * @param  {string} info ["the text string sent to Tuling robot"]
 * @return {promise}      ["a promise object that resolve on tuling api response , return the response body"]
 */
function getTulingRes(info,fromuser){
	var defer = Q.defer();
	info = info.toString();
	console.log("getTulingRes got the input  "+info);
	var infolist = {
		key:config.tulingkey,
		info:info,
		userid:fromuser
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
		
		if(res){
			defer.resolve(body);
		} else if(err){
			Q.reject(err);
		}
		});
	return defer.promise;
}

module.exports = getTulingRes;
