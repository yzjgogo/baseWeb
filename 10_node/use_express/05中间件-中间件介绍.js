/*
 什么是中间件
中间件（Middleware ），特指业务流程的中间处理环节。
参考：中间件的理解.jpg

 Express 中间件的调用流程
当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

1:中间件函数与路由函数的区别：
 中间件函数的参数是 (req, res, next)  而路由函数的参数是 (req, res)，但是我试了试路由函数也可以有next参数?

2:中间件必须写在路由之前，才能生效 

3：错误级别的中间件函数的参数是 (err, req, res, next)，这个中间件函数必须写在路由之后，才能生效

4：客户端发送过来的请求，可以连续调用多个中间件进行处理

5：客户端发送过来的请求，可以连续调用多个中间件进行处理

6：为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码

7：连续调用多个中间件时，多个中间件之间，共享 req 和 res 对象


中间件的分类：
1：应用级别的中间件
通过 app.use()注册的全局中间件 或 通过app.get() 或 app.post()注册的局部中间件 ，绑定到 app 实例上的中间件，叫做应用级别的中间件
*/ 