const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result1 = document.querySelector(".result1");

if (!!window.SharedWorker) {
  const myWorker = new SharedWorker("worker.js");

  first.onchange = function () {
    //向共享子线程发送消息
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  /**
   接收子线程的消息

   使用myWorker.port.onmessage会自动打开端口连接，无需再调用myWorker.port.start()方法
   使用myWorker.port.addEventListener()不会自动打开端口连接，需要手动调用myWorker.port.start()方法
   * */
  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data;
    console.log("Message received from worker");
    console.log(e.lastEventId);
  };

  /*
  myWorker.port.addEventListener('message',function (e) {
    result1.textContent = e.data;
    console.log("Message received from worker");
    console.log(e.lastEventId);
  })
  myWorker.port.start()
   */
}
