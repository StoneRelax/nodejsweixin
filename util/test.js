var fs = require('fs');

var str = fs.readFileSync('./weixiniplist').toString().split(",");
console.log(str[1]);

