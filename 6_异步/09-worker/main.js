//第1,创建一个worker，传入的generate.js脚本将运行在worker线程，且一旦new Worker('./generate.js')
//则generate.js立刻会执行，你可以在generate.js里console.log一下看看
const worker = new Worker('./generate.js');

// 第2,主线程向worker线程发送消息，worker.postMessage(msgObj)
// 当用户点击 "Generate primes" 时，给 worker 发送一条消息。
// 消息中的 command 属性是 "generate", 还包含另外一个属性 "quota"，即要生成的质数。
document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    worker.postMessage({
        command: 'generate',
        quota: quota
    });
});

// 第3，主线程接收worker线程的消息；
// 给worker添加一个消息处理器，这样主线程就可以接收worker线程发送来的消息；发送的消息的数据会被存放到message.data里面
// 当 worker 给主线程回发一条消息时，为用户更新 output 框，包含生成的质数（从 message 中获取）。
worker.addEventListener('message', message => {
    document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});
//这样接收消息也可以
// worker.onmessage = function(message){
//     console.log("收到消息了")
//     document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
// }

//第8，主线程收到onerror事件
//error.message：错误信息
//error.filename：发生错误的脚本文件名，这里是generate.js
//error.lineno：发生错误的代码行
worker.onerror = function(error){
    console.log('出错了',error)
}

document.querySelector('#reload').addEventListener('click', () => {
    document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});


//第9，果你需要从主线程中立刻终止一个运行中的 worker，可以调用 worker 的terminate 方法
// worker.terminate()
