// 引入http模块
const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

// 创建一个服务
const server = http.createServer()

// 监听请求
// request: 请求对象，包含了请求信息
// response: 响应对象，响应信息
server.on('request', function(request, response) {
    const reqUrl = request.url // 获取请求路径
    console.log(reqUrl);
    console.log('服务被请求了');
    // 根据不同的请求路径，执行不同的逻辑
    // response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin', '*')
    if(reqUrl === '/') {
        console.log('首页');
        // 响应数据默认的编码格式使用的是utf8
        // 但是浏览器不知道服务端响应的数据是utf8编码格式
        // 浏览器就是使用系统的默认编码格式，中文电脑gbk
        // 解决：主动告诉浏览器服务端使用的编码格式
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        fs.readFile('./view/index.html', 'utf8', function(err, data) {
            if(err) {
                return response.end('服务出错')
            }
            response.end(data)
        })
    } else if(reqUrl === '/login') {
        console.log('登录');
        fs.readFile('./view/login.html', 'utf8', function(err, data) {
            if(err) {
                return response.end('服务出错')
            }
            response.end(data)
        })
    } else if(reqUrl === '/student') {
        const student = [
            { id: 1, name: '张三', age: 18 },
            { id: 2, name: '李四', age: 20 },
            { id: 3, name: '王五', age: 20 },
        ]
        fs.readFile('./view/student.html', 'utf8', function(err, data) {
            if(err) {
                return response.end('服务出错')
            }
            const str = ejs.render(data, { student })
            console.log(str);
            response.end(str)
        })
    } else if(reqUrl === '/get/student') {
        const student = [
            { id: 1, name: '张三', age: 18 },
            { id: 2, name: '李四', age: 20 },
            { id: 3, name: '王五', age: 20 },
        ]
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end(JSON.stringify(student))
    }
})

// 开启端口
server.listen(3000, function() {
    console.log('服务启动成功！运行在http://127.0.0.1:3000');
})