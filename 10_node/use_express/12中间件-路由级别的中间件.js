//路由的用法参考：E:\web\baseWeb\10_node\use_express\04路由-模块化路由.js

const express = require('express')
const app = express()
const router = express.Router()


//在router对象上注册路由级别的中间件，它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上
router.use(function(req, res, next) {
  console.log('路由级别的中间件')
  next()

})

router.get('/', (req, res) => {
  res.send('Get user list.')
})

app.use(router)

app.listen(80, () => {  
  console.log('http://127.0.0.1')
  })

