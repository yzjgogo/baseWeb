
/*
参考：E:\web\baseWeb\10_node\use_express\15中间件-自定义中间件_实现表单数据的解析_querystring用法.js 和 node的模块化相关
*/

const express = require('express')
const app = express()

const customBodyParser = require('./files/custom-body-parser')
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
