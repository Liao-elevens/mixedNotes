console.log('1.node==')

// http请求======
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
// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();




/** MySQL
 * npm install mysql
 * 连接 ——> 数据库 ——> 运行SQL文件（编码 utf-8）
 * 
 * 猫的测试环境
 * rm-bp15t47j196je1u0l906.mysql.rds.aliyuncs.com
 * test_all
 * dNYnDCDfT45qUxzM9KoDrKWX
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123456',
  database : 'runoob'

  // codemao
  // host     : 'rm-bp15t47j196je1u0l906.mysql.rds.aliyuncs.com',
  // user     : 'test_all',
  // password : 'dNYnDCDfT45qUxzM9KoDrKWX',
  // database : 'codecamp'
});
 
connection.connect();
//查 =====
var  sql = 'SELECT * FROM websites';
// var  sql = 'SELECT * FROM tbl_reports_event';
connection.query(sql,(err, result)=> {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
  
// //增 =====
// var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
// var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// //改 =====
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

// //删 =====
// var delSql = 'DELETE FROM websites where id=6';
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

connection.end();