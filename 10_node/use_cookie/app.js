
/*

该项目的执行：node app.js 或 nodemon app.js
然后浏览器请求http://127.0.0.1 或 http://127.0.0.1/index.html


Cookie认证方式适用于传统的服务端生成前端页面的应用场景，不适用于前后端分离的应用场景，前后端分离应该用token认证方式

参考：E:\web\JsBase\07_Apache\Cookie和Session.html

注意Session实际上就是Cookie的使用，即安全的使用Cookie

整个流程是这样的：
1：浏览器直接访问http://127.0.0.1，会默认请求http://127.0.0.1/index.html
2：index.html加载完成会请求'/api/username'，'/api/username'里会先通过session里的数据判断用户是否登录
3：如果用户没有登录就会跳转到登录页面login.html
4：在登录页面会调用登录接口'/api/login'，里面的逻辑是，用户名密码正确代表登录成功，此时服务端会把登录信息和islogin状态存入session中，这样的话，下次用户直接走上面的第1不，可能就不需要登录了，直接通过session判断了
5：在index.html里用户点击退出登录按钮，会调用'/api/logout'接口，服务端会清空session里的数据，这样下次用户访问'/api/username'就会被跳转到登录页面了

另外：
我看到的现象是这样，你只是单纯的use了express-session这个中间件,如下这样：
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)
后续不使用sesson的任何代码，例如把'/api/login'、'/api/username'、'/api/logout'里的任何session相关的代码都删掉，然后直接访问http://127.0.0.1，F12都能看到cookie信息
F12 - Application - 左侧 - Storage - Cookies - http://127.0.0.1  看的到
F12 - Network - index.html - 右侧 - Cookies - 也能看到
F12 - Network - index.html - 右侧 - Headers - Request Headers - Cookie - 也能看到,注意是Request Headers不是Response Headers
F12 - Network - '/api/login'、'/api/username' - 等接口也能看到



*/

const express = require('express')
const app = express()

// TODO_01：请配置 Session 中间件
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)

// 托管静态页面,启动服务后浏览器访问http://127.0.0.1会到达./pages目录下的index.html，会优先找index开头的html，你如果把index.html改成别的名字例如index1.html，就找不到了，参考：10_node\19模块化-模块的加载机制.js
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

// 登录的 API 接口
app.post('/api/login', (req, res) => {
  // 判断用户提交的登录信息是否正确
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  // TODO_02：请将登录成功后的用户信息，保存到 Session 中
  // 注意：只有成功配置了 express-session 这个中间件之后，才能够通过 req 点出来 session 这个属性
  //注意这里session是放到req里而不是放到res里
  req.session.user = req.body // 用户的信息
  req.session.islogin = true // 用户的登录状态

  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息，你能清空当前浏览器当前用户的session信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功',
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function () {
  console.log('Express server running at http://127.0.0.1:80')
})
