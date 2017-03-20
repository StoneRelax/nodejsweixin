/* jshint node:true */
"use strict";

module.exports =  {
     "button":[
     {	
         "type":"view",
         "name":"看下百度",
         "url":"http://www.baidu.com"
      },
     {
     	"type":"click",
     	"name":"赞一下！",
     	"key":"some_like_us"
     },
     {
         "name":"菜单",
         "sub_button":[
         {	
             "type":"view",
             "name":"搜索",
             "url":"http://www.soso.com/"
         },
         {
            "type":"view",
            "name":"视频",
            "url":"http://v.qq.com/"
         },
         {
             "type":"click",
             "name":"再赞一下我们",
             "key":"some_like_us"
         }]
       }]
 }
