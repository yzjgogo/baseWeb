/**
 当一个端口连接被创建时（例如：在multiply.js主线程中，设置 onmessage 事件处理函数，或者显式调用 start() 方法时），
 使用 onconnect 事件处理函数来执行代码。
 */
onconnect = function (event) {
//   在worker.js里写上console.log()然后浏览器F12控制台无法看到输出的解决办法：
// 参考：看到worker里的log.png
  const port = event.ports[0];
  console.log(port)

  /**
   接收主线程的消息

   使用port.onmessage会自动打开端口连接，无需再调用port.start()方法
   使用port.addEventListener()不会自动打开端口连接，需要手动调用port.start()方法
   * */
  port.onmessage = function (e) {
    console.log('worker收到消息',e)
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    //向主线程发送消息
    port.postMessage(workerResult);
  };

  /*
  port.addEventListener('message',function(e){
      console.log('worker收到消息',e)
      const workerResult = `Result: ${e.data[0] * e.data[1]}`;
      port.postMessage(workerResult);
  })
  port.start()
   */
};
