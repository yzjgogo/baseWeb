
/*
这个自定义中间件用于解析表单请求数据：
所谓表单请求数据就是如图：postman发送urlencoded数据.jpg中传递的数据
*/


const express = require('express')
const app = express()
// 导入 Node.js 内置的 querystring 模块，用于将类似浏览器地址栏后面的?name=zhangsan&age=18 这种格式的字符串，解析成对象格式的数据
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件，因为客户端的请求数据可能很长，一次性接收不完，所以客户端分批发送，每次都会触发 data 事件，然后服务端再把每次收到的数据拼接起来，知道监听到'end'事件说明请求数据发送完毕了，也就完成拼接，拿到所有的请求参数了
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件
  req.on('end', () => {
    // 在 str 中存放的是完整的请求体数据，如果是中文 应该是带%的编码格式的乱码
    console.log('完整的请求参数',str)//汉字是乱码
    // TODO: 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    console.log('格式化的参数',body)//乱码汉字被解析成了真实的汉字
    // 4. 把解析出来的对象格式的请求体数据，挂载到 req.body 属性上，供后续的路由处理函数使用
    req.body = body
    next()
  })
})

app.post('/user', (req, res) => {
  res.send(req.body)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1')
})
