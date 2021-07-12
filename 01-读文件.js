// 引入模块fs
const fs = require('fs')

// 读文件
// 第一个参数：文件路径
// 第二个参数：回调函数
// fs.readFile('./01.txt', function(err, data) {
//     console.log(err);
//     console.log(data.toString());
// })
fs.readFile('./01.txt', 'utf8', function(err, data) {
    // console.log(err);
    if(err) {
        return console.log('读取文件出错');
    }
    console.log(data);
})