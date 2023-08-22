// 发送 websocket 心跳检测
class HeartCheck {
  constructor (websocket, timeout, msg, handler) {
    this.timeout = timeout
    this.serverTimeoutObj = null
    this.websocket = websocket
    this.msg = msg
    this.handler = handler
  }
  reStart () {
    this.reset().start()
  }
  reset () {
    clearTimeout(this.serverTimeoutObj)
    return this
  }
  start () {
    this.serverTimeoutObj = setTimeout(() => {
      if (this.websocket.readyState == 1) {
        this.websocket.send(this.msg)
        this.reset().start()
      } else {
        // TODO
        // this.handler && this.handler() 如果websocket关闭了，可传入回调，重连
      }
    }, this.timeout)
  }
}

export default HeartCheck
