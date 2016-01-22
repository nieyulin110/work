var model = require('./foo.js');

var data = require('./person.js');

var mongodb = require('mongodb');

var isArray = require('isarray');

var http = require('http');

var express = require('express');
//console.log(model);
var person = new model ('nieyulin',110);

var ms = require('ms');

var key = new data(1,2,30000);

console.log(key.sayHello());

console.log('http',http);

//console.log('http',http);

// console.log(key.sayHello());
//
// console.log('express',express);
// //获取mongodb的数据的使用
// console.log('mongodb',mongodb);
