const express = require('express')
const app = express()

// app.use('/files', express.static('./files'))

// 1. 导入路由模块,进入./files/my_router 看看路由具体怎么定义的
const router = require('./files/my_router')
// 2. 注册路由模块
app.use('/api', router)//为路由模块添加前缀，这样请求http://127.0.0.1/api/user/list
// app.use(router)//这样请求：http://127.0.0.1/user/list

// 注意： app.use() 函数的作用，就是来注册全局中间件

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
