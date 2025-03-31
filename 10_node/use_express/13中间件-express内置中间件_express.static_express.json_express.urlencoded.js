// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
/**
 内置中间件1：express.json()，用于解析 JSON 格式的请求体数据，放到 req.body中，有兼容性，仅在 4.16.0+ 版本中可用

 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据,Postman -> Body -> raw -> JSON  ->输入 {
    "user":"刘德华",
    "age":18
} 请服务端发送json格式的数据，参考图片：postman发送json数据.jpg，注意在postman输入json数据时要用双引号
 */
app.use(express.json())
/*
内置中间件2：express.urlencoded()，用于解析 url-encoded 格式的请求体数据，放到 req.body中，有兼容性，仅在 4.16.0+ 版本中可用
通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据，参考：postman发送urlencoded数据.jpg

urlencoded格式的数据是不是就是那种汉字被解析成了 %E4%BD%A0%E5%A5%BD 这种格式的数据,然后express.urlencoded()会自动解析成真实的汉字，想看到乱码的汉字参考：E:\web\baseWeb\10_node\use_express\15中间件-自定义中间件_实现表单数据的解析.js中'end'事件里的console.log('完整的请求参数',str)的输出

*/ 
app.use(express.urlencoded({ extended: false }))

/*
内置中间件3: express.static()，用于托管静态资源,参考：E:\web\baseWeb\10_node\use_express\02使用express.static对外提供静态资源.js
*/

app.post('/user', (req, res) => {
  // 在服务器，可以使用 req.body 这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log('用户路由', req.body)
  res.send('ok')
})

app.post('/book', (req, res) => {
  // 在服务器端，可以通过 req,body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log('书本路由', req.body)
  res.send('ok')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
