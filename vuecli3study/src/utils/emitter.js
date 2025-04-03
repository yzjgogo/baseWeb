class Emitter {
  constructor() {
    if (!Emitter.instance) {
      this.events = {}
      Emitter.instance = this
    }

    return Emitter.instance
  }

  // 订阅事件
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }

  // 取消订阅事件
  off(event, listenerToRemove) {
    if (!this.events[event]) return

    this.events[event] = this.events[event].filter(
      (listener) => listener !== listenerToRemove
    )
  }

  // 触发事件
  emit(event, data) {
    if (!this.events[event]) return

    this.events[event].forEach((listener) => listener(data))
  }
}

const instance = new Emitter()
Object.freeze(instance)

export default instance
