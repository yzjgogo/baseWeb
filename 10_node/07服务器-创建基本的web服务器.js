// 1. 导入 http 模块
const http = require('http')
// 2. 创建 web 服务器实例
const server = http.createServer()
// 3. 为服务器实例绑定 request 事件，监听客户端的请求,当有客户端发起请求时会回调，例如浏览器地址栏访问，postman访问，android客户端接口访问等等
server.on('request', function (req, res) {
  console.log('Someone visit our web server.')
})
// 4. 启动服务器，指定端口，127.0.0.1就是localhost,localhost是域名，127.0.0.1是ip
server.listen(8080, function () {  
  //服务器启动成功的回调
  console.log('server running at http://127.0.0.1:8080')
})
