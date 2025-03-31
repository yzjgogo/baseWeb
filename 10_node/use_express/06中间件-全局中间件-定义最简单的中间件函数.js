const express = require('express')
const app = express()

// 1:定义一个最简单的中间件函数,中间件函数与路由函数的区别：
// 中间件函数的参数是 (req, res, next)  而路由函数的参数是 (req, res)，但是我试了试路由函数也可以有next参数?
const mw = function (req, res, next) {
  console.log('这是最简单的中间件函数')
  // 把流转关系，转交给下一个中间件或路由，必须调用，如果不调用就没法继续请求了，类似vue的router的next方法
  next()
}

// 2:将 mw 注册为全局生效的中间件,全局的中间件：任何一个请求来时，都会走这个中间件
app.use(mw)

// 3:这是定义全局中间件的简化形式
// app.use((req, res, next) => {
//   console.log('这是最简单的中间件函数')
//   next()
// })

//这个路由的请求来时，会走全局的中间件
app.get('/', (req, res) => {
  console.log('调用了 / 这个路由')
  res.send('Home page.')
})

//这个路由的请求来时，会走全局的中间件
app.get('/user', (req, res) => {
  console.log('调用了 /user 这个路由')
  res.send('User page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
