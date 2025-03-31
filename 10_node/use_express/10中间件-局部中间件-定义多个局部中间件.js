// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 1. 定义中间件函数
const mw1 = (req, res, next) => {
  console.log('调用了第一个局部生效的中间件')
  next()
}

const mw2 = (req, res, next) => {
  console.log('调用了第二个局部生效的中间件')
  next()
}

// 2. 创建路由,注册多个中间件函数，可以直接通过逗号分隔传入多个，也可以传入多个中间件组成的数据，当客户端请求'/'路由时，这多个中间件都会执行
// app.get('/', mw1, mw2, (req, res) => {
  app.get('/', [mw1, mw2], (req, res) => {
  res.send('Home page.')
})

//3.这个路由没有注册中间件，目前也没有全局的中间件，因此客户端请求这个路由时，不会走任何中间件
app.get('/user', (req, res) => {
  console.log('调用了 /user 这个路由==')
  res.send('User page.')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
