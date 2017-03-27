"use strict"

var redis = require('ioredis');
var connection = new redis(6379,'127.0.0.1');
module.exports = connection;
