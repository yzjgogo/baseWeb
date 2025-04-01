
const express = require('express')
const app = express()
const router = require('./files/apiRouter')
app.use('/api', router)//注意加了前缀api，客户端请求也要加
// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})