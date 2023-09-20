console.log('1.node==')

// var http = require('http');
// http.createServer(function (request, response) {
//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('http.createServer\n response.end');
// }).listen(8888);
// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');

// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log('阻塞代码==',data.toString());
// fs.readFile('input.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log('非阻塞代码==',data.toString());
// });
// console.log("程序执行结束!");

// 事件驱动======
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();