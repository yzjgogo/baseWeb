const express = require('express')
const router = express.Router()

//路由处理函数抽取步骤2,导入对应的路由处理函数
// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

//使用第三方中间件实现表单数据验证步骤6： 导入验证数据的中间件@escook/express-joi
const expressJoi = require('@escook/express-joi')
//使用第三方中间件实现表单数据验证步骤7：导入需要的验证规则对象，@escook/express-joi需要使用这个规则对象来验证数据
const { reg_login_schema } = require('../schema/user')


// 使用第三方中间件实现表单数据验证步骤8：声明局部中间件'expressJoi(reg_login_schema)'，对当前请求中携带的数据进行验证,数据验证通过后，会把这次请求流转给后面的路由处理函数，数据验证失败后，终止后续代码的执行，并抛出一个全局的 Error 错误，进入全局错误级别中间件中进行处理
//路由处理函数抽取步骤3:使用对应的路由处理函数
// 注册新用户
router.post('/reguser', expressJoi(reg_login_schema), user_handler.regUser)
// 登录
router.post('/login', expressJoi(reg_login_schema), user_handler.login)

module.exports = router
