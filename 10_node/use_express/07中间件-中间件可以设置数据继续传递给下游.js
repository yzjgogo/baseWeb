const express = require('express')
const app = express()

// 定义一个全局的中间件
app.use((req, res, next) => {
  //当请求来时，可以给请求添加新的属性，下游的中间件或路由都可以使用这个属性
  const time = Date.now()
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  //使用之前中间件添加的数据
  res.send('Home page.' + req.startTime)
})
app.get('/user', (req, res) => {
  //使用之前中间件添加的数据
  res.send('User page.' + req.startTime)
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
