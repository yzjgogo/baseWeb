
/*
Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。
参考：10_node\use_express\13中间件-express内置中间件_express.static_express.json_express.urlencoded.js

第三方中间件的使用步骤：
1：npm install body-parser 安装中间件，这里我并没有install发现body-parser也能用
2：require('body-parser')引入中间件
3：调用 app.use() 注册并使用中间件
*/

const express = require('express')
const app = express()

// 1. 导入解析表单数据的中间件 body-parser，参考：postman发送urlencoded数据.jpg
const parser = require('body-parser')
// 2. 使用 app.use() 注册中间件， 用法和Express 内置的 express.urlencoded() 一样，因为express.urlencoded就来自body-parser
app.use(parser.urlencoded({ extended: false }))
// app.use(express.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
