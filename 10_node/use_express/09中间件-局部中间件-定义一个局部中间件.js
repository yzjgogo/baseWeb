// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了局部生效的中间件')
  next()
}

// 2. 创建路由,把之前的中间件函数，注册到路由上，成为只在这个路由被访问时生效的中间件
app.get('/', mw1, (req, res) => {
  res.send('Home page.')
})

//3.这个路由没有注册中间件，因此客户端请求这个路由时，不会走mw1这个中间件
app.get('/user', (req, res) => {
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
