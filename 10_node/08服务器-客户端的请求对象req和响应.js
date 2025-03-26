const http = require('http')
const server = http.createServer()

// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  // req.url 是客户端请求的 URL 地址
  const url = req.url
  // req.method 是客户端请求的 method 类型,浏览器地址栏一般就是get请求，postman可以模拟get、post、put、delete等请求
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
  // 调用 res.end() 方法，向客户端响应一些内容，默认情况下如果向客户端响应中文会出现乱码，下一个案例解决乱码问题
  res.end(str)
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
