// 使用Node搭建一个web服务器

const http = require('http');
const server = http.createServer();

server.on('request', function(request, response) {
    console.log('收到客户端的请求了,路径是:' + request.url)

    // write也可以不用写，直接在end里面返回数据
    const url = request.url;
    response.setHeader('Access-Control-Allow-Origin', '*')
    if(url === '/one') {
        setTimeout(() => {
            response.end('1')
        }, 1000)
    } else if(url === '/two') {
        setTimeout(() => {
            response.end('2')
        }, 2000)
    } else if(url === '/three') {
        setTimeout(() => {
            response.end('3')
        }, 3000)
    }
})

// 4、绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功了，通过http://127.0.0.1:3000/ 进行访问')
})