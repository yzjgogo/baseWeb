//第4，主线程main.js里一旦new Worker('./generate.js'),generate.js就会立刻执行
//立刻执行的第一件事就是监听来自主线程main.js里的消息，这里不需要worker.addEventListener()
//因为在worker线程里，worker对象是全局的'this'
//发送的消息的数据会被存放到message.data里面
console.log("立刻执行了generate.js")
// 监听主线程中的消息。
// 如果消息中的 command 是 "generate"，则调用 `generatePrimse()`
addEventListener("message", message => {
    if (message.data.command === 'generate') {
        generatePrimes(message.data.quota);
    }
});

//第7，worker线程收到onerror实践
//error.message：错误信息
//error.filename：发生错误的脚本文件名，这里是generate.js
//error.lineno：发生错误的代码行
onerror = function(error){
    console.log('出错了---',error)
}
// 生成质数 (非常低效)
function generatePrimes(quota) {

    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }


    //第6，模拟出错了，worker线程和主线程都会收到onerror事件
    // let aa = undefined
    // aa.test()

    //第5，worker线程，向主线程发送消息
    // 完成后给主线程发送一条包含我们生成的质数数量的消息消息。
    postMessage(primes.length);
}

//第10，在 worker 线程中，worker可以调用自己的 close 方法进行关闭work线程
// close()

//第11  https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers
// importScripts();                        /* 什么都不引入 */
// importScripts('foo.js');                /* 只引入 "foo.js" */
// importScripts('foo.js', 'bar.js');      /* 引入两个脚本 */

