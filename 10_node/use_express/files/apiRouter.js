const express = require('express')
const router = express.Router()

/**
 参考：18写接口-跨域请求接口.html
 如果不适用cors这个中间件，在 18写接口-跨域请求接口.html 中请求这几个接口时就会包跨域的错误
 因为接口定义在http://127.0.0.1，客户端'18写接口-跨域请求接口.html'是在本地的file协议打开，即使不是file协议打开，而是非'http://127.0.0.1'的域名下请求，都会报跨域的问题，而cors中间件可以解决跨域问题

 cors使用步骤分为如下 3 步：
① 运行 npm install cors 安装中间件
② 使用 const cors = require('cors') 导入中间件
③ 在路由之前调用 app.use(cors()) 配置中间件

什么事cors(跨域资源共享)：客户端跨域请求资源，会被浏览器阻止，而不是被服务端阻止的，但是服务端可以设置一些响应头通知浏览器不要阻止，从而浏览器将服务端的数据返回给客户端。
参考：跨域资源共享的理解.jpg

CORS 的注意事项
① CORS 主要在服务器端进行配置。客户端浏览器无须做任何额外的配置，即可请求开启了 CORS 的接口。
② CORS 在浏览器中有兼容性。只有支持 XMLHttpRequest Level2 的浏览器，才能正常访问开启了 CORS 的服
务端接口（例如：IE10+、Chrome4+、FireFox3.5+）。

cors响应头：
1：Access-Control-Allow-Origin: <origin> | *
其中，origin 参数的值指定了允许访问该资源的外域 URL。
例如，下面的字段值将只允许来自 http://itcast.cn 的请求：
res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')
如果指定了 Access-Control-Allow-Origin 字段的值为通配符 *，表示允许来自任何域的请求，示例代码如下：
res.setHeader('Access-Control-Allow-Origin', '*')

2：Access-Control-Allow-Headers：注意这里是客户端向服务端发送请求头的设置
默认情况下，CORS 仅支持客户端向服务器发送如下的 9 个请求头：
Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、
Content-Type （值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）
如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外
的请求头进行声明，否则这次请求会失败：
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type') //允许客户端额外向服务端发送
X-Requested-With和Content-Type 这两个请求头，注意，多个请求头直接用英语的逗号分隔。

3：Access-Control-Allow-Methods
默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。
如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods
来指明实际请求所允许使用的 HTTP 方法，示例代码如下：
res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, HEAD') //允许客户端使用POST, GET, PUT, DELETE, OPTIONS, HEAD请求方式请求服务端的资源
res.setHeader('Access-Control-Allow-Methods', '*') //允许客户端使用任意请求方式请求服务端的资源


cors请求的分类：
客户端在请求 CORS 接口时，根据请求方式和请求头的不同，可以将 CORS 的请求分为两大类，分别是：
① 简单请求
② 预检请求

简单请求：
同时满足以下两大条件的请求，就属于简单请求：
① 请求方式：GET、POST、HEAD 三者之一
② HTTP 头部信息不超过以下几种字段：Accept、Accept-Language、Content-Language、DPR、
Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值application/x-www-formurlencoded、multipart/form-data、text/plain），即无自定义头部字段

预检请求：在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。
只要符合以下任何一个条件的请求，都需要进行预检请求：
① 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
② 请求头中包含自定义头部字段
③ 向服务器发送了 application/json 格式的数据

简单请求和预检请求的区别
简单请求的特点：客户端与服务器之间只会发生一次请求。
预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求。

演示预检请求：
在这里定义一个DELETE请求（接口3），根据预检请求的特点，DELETE请求就会发生预检请求(OPTION请求)，再在“18写接口-跨域请求接口.html”中发起这个DELETE请求，注意，火狐浏览器F12能看到预检请求，谷歌浏览器F12看不到预检请求

 */
const cors = require('cors')
router.use(cors())
// 接口1：get请求的接口
// postman请求：postman通过get请求?age=18&name=zhangsan发送数据，参考：postman-get请求.jpg
//演示跨域：使用jquery，ajax -》 data: { name: 'zs', age: 20 } 参考：18写接口-跨域请求接口.html
router.get('/get', (req, res) => {
  console.log('看看get请求参数', req.query)
  // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query//get请求参数是放在req.query对象中的
  // 模拟响应客户端的真实场景
  res.send({
    status: 0,
    msg: 'GET 请求成功！', 
    data: query, 
  })
})


// 接口2：POST请求接口,
// postman请求：我们是按照如图：postman发送urlencoded数据.jpg发的请求，因此用urlencoded中间件，才能解析出请求参数：E:\web\baseWeb\10_node\use_express\13中间件-express内置中间件_express.static_express.json_express.urlencoded.js
//演示跨域：使用jquery，ajax -》 data: { name: 'zs', age: 20 } 参考：18写接口-跨域请求接口.html
router.use(express.urlencoded({ extended: false }))
router.post('/post', (req, res) => {
  console.log('看看post请求参数2', req.body)
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  const body = req.body
  // 模拟响应客户端的真实场景
  res.send({
    status: 0,
    msg: 'POST 请求成功！',
    data: body,
  })
})

// 接口3：delete请求接口，
// postman请求：postman请求方式选择delete
//演示跨域：使用jquery，ajax -》 data: { name: 'zs', age: 20 } 参考：18写接口-跨域请求接口.html
router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功',
  })
})

module.exports = router
