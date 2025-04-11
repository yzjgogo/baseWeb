
/*
JWT认证机制
对比Cookie认证，JWT认证支持跨域认证
JWT认证流程参考：JWT认证流程.png

JWT 的组成部分（Token的组成）
JWT 通常由三部分组成，分别是 Header（头部）、Payload（有效荷载）、Signature（签名）。
三者之间使用英文的“.”分隔，格式如下：Header.Payload.Signature
参考：
生成token的接口.png
JWT三个组成部分的含义.png

客户端调用需要token验证的接口时，需要传token给服务端，参考：'/admin/getinfo' 接口

*/

const express = require('express')
const app = express()

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
// jsonwebtoken 用于生JWT(token)字符串
// express-jwt 用于解析 JWT(token)字符串，还原为JSON对象
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey，密钥既参与jsonwebtoken的加密，也参与 express-jwt 的解密
const secretKey = 'itheima No1 ^_^'

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件，unless用来指定哪些接口不需要token验证，这里api开头的接口不需要token验证，例如登录，注册等，而业务接口一般都需要token验证
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上，看接口'/admin/getinfo'
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

// 登录接口
app.post('/api/login', function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body
  // 登录失败
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({
      status: 400,
      message: '登录失败！',
    })
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  // 参数1：用户的信息对象
  // 参数2：加密的秘钥
  // 参数3：配置对象，可以配置当前 token 的有效期
  // 记住：千万不要把密码加密到 token 字符中
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr, // 要发送给客户端的 token 字符串
  })
})

/*
参考：发送请求携带token.png
这个接口需要token验证，客户端调用这个接口时需要再请求头添加，Authorization: Bearer 'token字符串'
注意要有'Bearer空格'这个前缀
*/ 
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端，这里其实就是因为express-jwt中间件的作用，将token还原为json对象，参考：发送请求携带token.png
  //之前生成token时，参与的用户信息对象是{ username: userinfo.username }，这里的 req.user 就是这个对象，但是会多出一个属性，参考：发送请求携带token.png
  console.log(req.user)
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user, // 要发送给客户端的用户信息
  })
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
  // 这次错误是由 token 解析失败导致的
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: '无效的token',
    })
  }
  res.send({
    status: 500,
    message: '未知的错误',
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8888, function () {
  console.log('Express server running at http://127.0.0.1:8888')
})
