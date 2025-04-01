const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
/*
定义一个get请求的接口，因为jsonP解决跨域问题，只能解决get请求的跨域问题
这里我们并没有像“17写接口-定义几个接口并用postman请求.js”中的接口那样使用cros中间件解决跨域问题，因为jsonP本身就是解决get请求的跨域问题的

实现 JSONP 接口的步骤：这个步骤似乎和本案例有点出入，我还是没太懂jsonP，以后研究，反正这个案例是通的
① 获取客户端发送过来的回调函数的名字
② 得到要通过 JSONP 形式发送给客户端的数据
③ 根据前两步得到的数据，拼接出一个函数调用的字符串
④ 把上一步拼接得到的字符串，响应给客户端的 <script> 标签进行解析执行
*/
app.get('/api/jsonp', (req, res) => {
  /*
  
jsonP请求来了 {
  callback: 'jQuery34107843950545048735_1743512295358',
  _: '1743512295360'
}
  可见有一个callback参数，这个callback不是我添加的，也不是'19-2-发起jsonP请求.html'请求端添加的
  应该是系统分配的
  */
  console.log('jsonP请求来了', req.query)
  // TODO: 定义 JSONP 接口具体的实现过程
  // 1. 得到函数的名称
  const funcName = req.query.callback
  // 2. 定义要发送到客户端的数据对象，就可以通过callback，把json化后的datafalse传递给客户端
  const data = { name: 'zs', age: 22 }
  // 3. 拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 把拼接的字符串，响应给客户端
  res.send(scriptStr)//客户端就可以收到json化的data，即JSON.stringify(data)，参考：19-2-发起jsonP请求.html
})

// 启动服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})