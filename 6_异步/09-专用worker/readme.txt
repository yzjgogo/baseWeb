https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing_workers
https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers


对于多线程代码，你永远不知道你的线程什么时候将会被挂起，其他线程将会得到运行的机会。因此，如果两个线程都可以访问相同的变量，
那么变量就有可能在任何时候发生意外的变化，这将导致很难发现的 Bug。
为了避免这些问题，你的主代码和你的 worker 代码永远不能直接访问彼此的变量。Workers 和主代码运行在完全分离的环境中，只有通
过相互发送消息来进行交互。特别是，这意味着 workers 不能访问 DOM（窗口、文档、页面元素等等）。

main.js运行在主线程，且在index.html中只有main.js被引入了，generate.js并没有被引入；
generate.js运行在work线程
main.js和generate.js通过消息发送互传信息

subworker：这个东西好像还没有浏览器支持，不知道怎么用到，也没搜索到，先看下MDN文档的几句话概况吧
https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers


专用worker中，DedicatedWorkerGlobalScope 对象代表了 worker 的上下文
SharedWorker中，SharedWorkerGlobalScope是上下文

主线程main.js与work线程之间数据的传递其实是传递的数据的副本(拷贝)，不是数据的共享；ShareWorker也是如此