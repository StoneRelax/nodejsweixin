"use strict"
var http = require("http");
var server = http.createServer(function(req,res){
	res.end("port 80 redircted , fuck you huangyue");
});
server.listen(8000);
