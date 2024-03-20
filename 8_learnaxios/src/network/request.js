import axios from 'axios'
/**
 * 用TypeScript封装axios：
 * https://juejin.cn/post/7071518211392405541
 * */
export function request(config) {
  // 1.创建axios的实例，注意不是用全局的
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用，这个config就是上面request的参数那个config
  instance.interceptors.request.use(config => {
    //请求成功的拦截
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    return config//拦截(且处理)后得返回回去，否则请求没法进行了
  }, err => {
    //请求失败的拦截
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    //响应成功的拦截
    // console.log(res);
    return res.data//同样，处理好也要返回取出，否则外面就拿不到结果了，我们可以根据需要只返回data这个业务数据
  }, err => {
    //响应失败的拦截
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)//其实返回值就是一个Promise
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

// function test(aaa, bbb) {
//   // aaa('Hello World')
//   bbb('err message')
// }
//
// test(function (res) {
//   console.log(res);
// }, function (err) {
//   console.log(err);
// })
