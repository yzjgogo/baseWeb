参考：
https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers

index.html是入口 里面可以跳转到 index2.html

index和index2共享worker.js这个工作线程

index.html引入了multiply.js，multiply.js里new SharedWorker("worker.js")了
index2.html引入了square.js，square.js里new SharedWorker("worker.js")了
这样就实现了index.html和index2.html两个页面共用一个worker.js

在worker.js里写上console.log()然后浏览器F12控制台无法看到输出的解决办法：
参考：看到worker里的log.png

专用worker中，DedicatedWorkerGlobalScope 对象代表了 worker 的上下文
SharedWorker中，SharedWorkerGlobalScope是上下文

主线程与work线程之间数据的传递其实是传递的数据的副本(拷贝)，不是数据的共享；专用Worker也是如此