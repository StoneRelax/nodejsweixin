/* jslint node:true */
"use strict";
var express = require('express');
var router = express.Router();
var enterWeixin = require('./enterWeixin.js');
var autoreply = require('./autoreply');


const url = require('url');
const path = require('path');
const config = require('../config');

/* GET home page. */
router.get('/', function(req,res){
	enterWeixin(req,res);
});
router.post('/',function(req,res){
	autoreply(req,res);
});

module.exports = router;

