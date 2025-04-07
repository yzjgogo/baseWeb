import Emitter from './emitter'

const FIXED_PREV_NAME = 'zhl-ai-channel'
/*
如果事件的发送方和接收方没有跨标签(同一个Windows)，则走commChannel里封装的Emitter通信，此时只有一个BroadcastChannel实例，无法收发信息；如果事件的发送方和接收方是跨标签(不同的Windows)，则走commChannel里封装的BroadcastChannel通信，此时发送方有class Channel，接收方也有class Channel，因此发送方会new一个new BroadcastChannel(`${channelName}`)，接收方也会new一个new BroadcastChannel(`${channelName}`)。这样就能跨标签通信了

这里#的号的作用：
https://blog.csdn.net/weixin_43094085/article/details/130245052
#号是ES2020 中引入了私有字段 (Private Fields) 的语法，可以通过在字段名前添加 # 来声明私有字段。私有字段是只能在类内部访问的字段，对外部不可见，可以起到隐藏实现细节的作用。
使用 # 符号声明是 ES6 中官方提供的用于声明私有属性的方式，可以被广泛使用，但是在某些情况下可能需要进行编译才能使用。

使用下划线 _ 开头的命名方式，是一种普遍的约定，被广泛使用来表示某个属性是私有属性，但是在语言层面上并没有真正的私有属性的保护。因此，如果在项目中使用下划线作为私有属性的命名方式，需要在文档中明确说明，以避免其他开发人员错误地修改了这些属性。

如果两者同时出现的化一般 _ 通常用来标识受保护的属性和方法，而 # 用来标识真正的私有属性和方法。

对于私有方法，例如这里的#startListening，在vue项目中，如果不使用@babel/plugin-transform-private-methods ，则构建项目会报错，因此需要使用@babel/plugin-transform-private-methods，步骤如下：
1：npm install @babel/plugin-transform-private-methods --save-dev
    进package.json看看 
2：在babel.config.js中添加如下代码：
  plugins: [
    ['@babel/plugin-transform-private-methods']
  ]
 参考官网：   https://babeljs.io/docs/babel-plugin-transform-private-methods

 已经在main.js中挂载当vue实例上了，用法：this.$commChannel
*/
class Channel {
  #channel = null // BroadcastChannel实例
  #subscribers = new Map()
  constructor(channelName) {
    this.#channel = new BroadcastChannel(`${channelName}`)
    this.#startListening()
  }
  #startListening() {
    this.#channel.onmessage = (event) => {
      const { type, data } = event.data
      const subscribers = this.#subscribers.get(type)
      if (!subscribers) return
      subscribers.forEach((callback) => {
        callback(data)
      })
    }
  }
  emit(type, data) {
    Emitter.emit(type, data)
    this.#channel.postMessage({ type, data })
  }
  on(type, callback) {
    Emitter.on(type, callback)
    if (!this.#subscribers.has(type)) {
      this.#subscribers.set(type, [])
    }
    this.#subscribers.get(type).push(callback)
    this.#channel.onmessage = (event) => {
      const { type, data } = event.data
      if (this.#subscribers.has(type)) {
        this.#subscribers.get(type).forEach((callback) => {
          callback(data)
        })
      }
    }
  }
  off(type, callback) {
    const subscribers = this.#subscribers.get(type)
    if (!subscribers) return
    const index = subscribers.indexOf(callback)
    index !== -1 && subscribers.splice(index, 1)
  }
  destroy() {
    if (this.#channel) {
      this.#channel.close()
      this.#channel = null
      this.#subscribers.clear()
    }
  }
}
//跨标签时，因为是不同的window，所以发送方和接收方import时，是两个不同的new Channel(FIXED_PREV_NAME)，因此可以收发信息
export default new Channel(FIXED_PREV_NAME)
