onconnect = function (event) {
//   在worker.js里写上console.log()然后浏览器F12控制台无法看到输出的解决办法：
// 参考：看到worker里的log.png
  console.log("执行onconnect1")
  console.log(event)
  console.log(event.ports)
  const port = event.ports[0];
  console.log(port)
  console.log("执行onconnect2")

  port.onmessage = function (e) {
    console.log('worker收到消息',e)
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
