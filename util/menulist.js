/* jshint node:true */
"use strict";

module.exports = {
	'button':[
	{
		'type':"view",
		'name':'访问百度',
		'url':'http://www.baidu.com'
	},
	{
		'type':"click",
		'name':'点我加一',
		'key':'someone_like_this'
	},
	{
		'name':'菜单',
		'sub_botton':[
		{
			'type':"view",
			'name':'再看一次百度',
			'url':'http://www.baidu.com'
		},
		{
			'type':"click",
			'name':'再加一次一',
			'key':'someone_like_this'
		}
		]
	}
	]
};
