<template>
  <div class="root-box">
    <div>
      <div class="line">$data 和 $options</div>
      <button @click="logData()">输出$data 和 $options</button>

      <div class="line">$forceUpdate()</div>

      <div>
        $forceUpdate()：总之你发现页面实在是没响应式刷新，就用它，保证能刷新，比如你修改对象的属性或数值的元素等等；<br />
        https://cn.vuejs.org/api/component-instance.html#emit
      </div>

      <div class="line">v-bind的用法</div>

      <div>
        向组件传入单个属性时，可以用v-bind:name或:name；向组件传入多个属性时，可以直接用v-bind传入一个对象，这个对象的每一个属性都是目标组件的属性或部分属性；例如这里是{
        name:"吴孟达", age:50
        }。参考：1_vue语法基础\LearnVuejs04\03-动态绑定属性
      </div>
      <TestWin v-bind:name="'张学友'"></TestWin>
      <TestWin v-bind:age="18"></TestWin>
      <TestWin v-bind="testObj"></TestWin>

      <div class="line">组件继承</div>
      <div>
        {{
          `子组件继承父组件：可用于修改父组件的行为满足自己的需求，一般当遇到第三方组件不足以满足自己的需求时，可以考虑这种方案。实际项目举例：无影(新华)移动版intelligent-book项目中，视频播放时全屏的方案是点击让整个布局旋转90度，但旋转后van-slider点击进度条某个区域后播放进度定位错乱了，因此可以考虑继承van-slider使其适配旋转的情况：(src\views\function\video-play\components\video-control.vue -> Slider -> src\components\wrong-question-notebook\CustomVideo\components\Slider.vue) -> 我已经拷贝到vuecli3study\src\views\vue-data\components\Slider.vue进去看详情`
        }}
      </div>

      <div class="line">组件的attrs和listeners的使用</div>

      <div class="tool-button" @click="toAttrsAndListeners()">
        组件的attrs和listeners的使用；<br />
        attrs：父组件传递给子组件的所有的非props属性(在子组件的props中找不到，也不包括class和style这种)都可以在子组件的this.$attrs中访问到，然后你在子组件中通过v-bind="$attrs"又可以向后代传递，直到遇到某个后代在props中定义了同名的attr就算传递到这个后代了，这对跨层级数据传递非常有用，某种程度上有android开发中单例的功能（回顾搜索:attr回顾步骤）；<br />
        listeners：孙子组件(任何层级的后代组件)想通过this.$emit()发送事件到爷爷或任何祖先组件时，可以在两端组件中间的每一层组件中使用v-on="$listeners"，这样就能做到事件层层向上传递到目标先辈组件。参考grandson发送事件，son里面用v-on="$listeners"修饰grandson，然后grandpa就能收到事件。
      </div>

      <div class="line">vue2中的路由解析($router.resolve，能看到很多有用的信息)-vue2中路由转url</div>
      <div class="tool-button" @click="routeResolve()">vue2中路由转url</div>
      <div class="tool-button" @click="routeToUrl()">vue2中路由转url</div>

      <div class="line">vuedraggable的用法</div>
      <div>
        参考：drag01.pdf，drag02.pdf，drag03.pdf，drag04.pdf，drag05.pdf <br />
        https://juejin.cn/post/7180234528009486394<br />
        https://sortablejs.github.io/Vue.Draggable/#/simple <br />
        https://github.com/SortableJS/Vue.Draggable <br />
        https://www.itxst.com/sortablejs/neuinffi.html <br />
        https://www.itxst.com/vue-draggable-next/tutorial.html <br />
      </div>

      <div class="line">隐私政策 或 协议模板</div>
      <div @click="toMemberAgreement()">跳转到会员协议</div>
      <div @click="toUserAgreement()">跳转到用户协议</div>

      <div class="line">自定义指令</div>
      <div @click="toDiyDirective()">去自定义指令</div>

      <div class="line">vConsole莫名其妙的问题</div>
      <div>
        vConsole引入后有时会导致浏览器的console输出一些莫名其妙的错误，关键时刻可以先把vConsole注释掉，排除掉这个原因
      </div>

      <div class="line">code-inspector-plugin</div>
      <div>
        code-inspector-plugin：可以F12的时候看都某个元素，例如div所在的vue文件，也可以通过快捷键直接在浏览器点击UI界面上的某个元素就会打开vscode对应的代码<br />
        使用步骤：code-inspector-plugin步骤1：在package.json的devDependencies中添加"code-inspector-plugin":
        "^0.19.2"<br />
        code-inspector-plugin步骤2：在vue.config.js中引入插件，搜索CodeInspectorPlugin
      </div>

      <div class="line">视口单位：vh,svh,lvh,dvh</div>
      <div>
        参考：视口单位.jpg <br />
        https://blog.csdn.net/qq_41221596/article/details/132632258
      </div>

      <div class="line">不跨标签和跨标签通信</div>
      <button>
        不能夸标签通信--常用的$bus.$emit，不再介绍：不支持夸标签通信
      </button>
      <button @click="toTestEmitterEvent()">
        不能夸标签通信--自己写一个事件总线：Emitter；完全是自己手写的，利用了javascript代码、变量、对象等是全局的、是挂到window上的特点实现的，即整个项目在不夸标签的情况下都能访问到同一个Emitter对象，参考emitter.js，已经在main.js中挂载到vue实例上了，用法this.$emitter
      </button>
      <button @click="toTestBroadcastChannelEvent()">
        能夸标签通信(例如浏览器window.open打开新的标签；android打开新的CommonWebviewActivity等，总之是不同的window的通信)--使用BroadcastChannel发送事件：1：如果不是跨标签(当前window)，则同一个BroadcastChannel实例发送的postMessage同一个BroadcastChannel的onmessage收不到，需要不同的BroadcastChannel实例才能收到，例如可以new一个BroadcastChannel执行postMessage，再new一个BroadcastChannel用于onmessage；2：如果是跨标签(不同的window)通信，则BroadcastChannel的发送方(postMessage)和接收方(onmessage)肯定不是同一个BroadcastChannel实例，他们分属不同的window，因此双方都需要new出BroadcastChannel实例。
      </button>
      <button @click="toTestCommonChannel()">
        不是跨标签的情况下走Emitter，跨标签的情况下走BroadcastChannel：其实就是把Emitter和BroadcastChannel封装成一个对象。用法和Emitter一样，发送事件用：this.$commChannel.emit('事件名',数据)；接收事件参考：this.$commChannel.on('事件名',回调函数)；参考commChannel.js里面的内容
      </button>

      <div class="line">
        获取url后面跟的参数，组成对象返回，兼容#前和#后都有的情况
      </div>
      <button @click="getQueryInUrl()">获取url参数</button>
    </div>
  </div>
</template>

<script>
//导入TestWin组件
import TestWin from './components/TestWin'
export default {
  name: 'VueData',
  components: { TestWin },
  data() {
    return {
      channel: null,
      bookList: ['大话西游'], // 名著的书本列表
      name: '周星驰',
      testObj: {
        name: '吴孟达',
        age: 50
      }
    }
  },
  mounted() {
    console.log('mounted执行了==')
    this.$emitter.on('testEmitter', this.emitterListener)

    // 监听BroadcastChannel事件
    this.channel = new BroadcastChannel('test-channel')
    // channel.onmessage = (event) => {
    //   console.log('接收到的Broadcast事件----', event.data)
    // }
    this.channel.onmessage = this.broadcastChannelListener

    this.$commChannel.on('testcommChannel', this.commChannelListener)
  },
  beforeDestroy() {
    console.log('beforeDestroyed执行了')
    this.$emitter.off('testEmitter', this.emitterListener)
    this.channel?.close()
  },
  activated() {
    console.log('activated执行了')
  },
  deactivated() {
    console.log('deactivated执行了')
  },
  methods: {
    /**
     * 获取url后面跟的参数，组成对象返回，兼容#前和#后都有的情况
     * @returns {Object} url参数对象
     * 
     * decodeURIComponent(i.split('=')[1])：对url参数进行解码，url参数中有中文时需要解码才能得到中文字符，例如这里的刘德华
     */
    getQueryInUrl() {
      // const url = window.location.href
      //http://localhost:8081/?token=7900150647de7f194c7adc6766212d331ed50b0a0b83355169f129e33f64fc6b#/book?book_id=1813067&name=刘德华
      const url = `http://localhost:8081/?token=7900150647de7f194c7adc6766212d331ed50b0a0b83355169f129e33f64fc6b#/book?book_id=1813067&name=%E5%88%98%E5%BE%B7%E5%8D%8E`

      const _query2Obj = (path) => {
        if (!path) return
        const queryStr = path.split('?')[1]
        if (!queryStr) return {}
        return Object.fromEntries(
          queryStr
            .split('&')
            .map((i) => [i.split('=')[0], decodeURIComponent(i.split('=')[1])])
        )
      }
      const [searchPath, hashPath] = url.split('#')
      const queryObj = {
        ..._query2Obj(searchPath),
        ..._query2Obj(hashPath)
      }
      console.log("参数解析结果", queryObj)
      return queryObj
    },
    emitterListener(mData) {
      console.log('接收到的事件----', mData)
    },
    broadcastChannelListener(event) {
      console.log('接收到的BroadcastChannel事件----', event.data)
    },
    commChannelListener(mData) {
      console.log('接收到的commChannelListener事件----', mData)
    },

    /**
     *
     */
    toTestEmitterEvent() {
      // this.$store.commit('studyTab/updateSubject', '西游记')
      //不跨标签打开新的路由tabPage，tabPage与当前的VueData页是不跨标签的，是同一个window。因此可以通过Emitter发送接收事件
      this.$router.push({
        name: 'tabPage'
      })

      //跨标签打开新的window页面，新页面在新的window里，是不同的内存空间，彼此无法通过Emitter发送接收事件
      // const rUrl = this.$router.resolve({
      //   name: 'tabPage'
      // }).href
      // window.open(rUrl)
    },
    toTestBroadcastChannelEvent() {
      /*
      mounted中可以收到事件，因为BroadcastChannel是不同的实例
       const channel1 = new BroadcastChannel('test-channel')
       channel1.postMessage('我是tabPage组件发出的Broadcast事件---')

      */

      /*
      mounted中收不到事件，因为BroadcastChannel是相同的实例
      this.channel.postMessage('我是tabPage组件发出的Broadcast事件---')
      */

      //非跨标签通信，即当前window通信，此时可以收到事件
      // this.$router.push({
      //   name: 'tabPage'
      // })

      //跨标签通信，即跨window通信，此时可以收到事件
      const rUrl = this.$router.resolve({
        name: 'tabPage'
      }).href
      window.open(rUrl)
    },
    toTestCommonChannel() {
      //非跨标签通信，即当前window通信，此时走commChannel里封装的Emitter通信
      this.$router.push({
        name: 'tabPage'
      })

      //跨标签通信，即跨window通信，此时走commChannel里封装的EmitterBroadcastChannel通信
      // const rUrl = this.$router.resolve({
      //   name: 'tabPage'
      // }).href
      // window.open(rUrl)
    },
    logData() {
      // 参考：https://v2.cn.vuejs.org/v2/api/#data
      console.log('输出$data')
      console.log(this.$data) //一次性输出所有的data，这里包括bookList和name
      console.log(this.$data.bookList) //等价于this.bookList,即$data可省略
      console.log(this.$data.name) //等价于this.name,即$data可省略

      //参考：https://v2.cn.vuejs.org/v2/api/#vm-options
      //$options是一个对象，包含了Vue组件实例下的name,data,methods等等所有属性和方法，也可以包含自定义的属性，例如这里customOption就是自定义的
      console.log(this.$options.data())
      console.log(this.$options.methods)
      console.log(this.$options.name)
      console.log(this.$options.customOption)
    },
    toAttrsAndListeners() {
      this.$router.push({
        name: 'grandpa'
      })
    },
    routeResolve(){
      const myResolve = this.$router.resolve({
        name: 'grandpa',
        query: {
          name: '周星驰',
          age: 50
        }
      })
      console.log('获得的路由解析结果', myResolve)
    },
    routeToUrl() {
      const rUrl = this.$router.resolve({
        name: 'grandpa',
        query: {
          name: '周星驰',
          age: 50
        }
      }).href
      /*  
      /grandpa?name=%E5%91%A8%E6%98%9F%E9%A9%B0&age=50
      得到的rUrl就是最终的结果，无效继续拼接前缀，例如http://localhost:8080，就可以直接访问，例如window.open(rUrl),或者iframe访问等等。。。。
      */
      console.log('获得的URL', rUrl)
      window.open(rUrl)
    },
    toMemberAgreement() {
      this.$router.push({
        name: 'Agreement',
        query: {
          type: 'member'
        }
      })
    },
    toUserAgreement() {
      this.$router.push({
        name: 'Agreement',
        query: {
          type: 'user'
        }
      })
    },
    toDiyDirective() {
      this.$router.push({
        name: 'DiyDirective'
      })
    }
  },
  customOption: 'foo' //自定义一个属性
}
</script>

<style lang="less" scoped>
.root-box {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.line {
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
}

.tool-button {
  width: fit-content;
  height: fit-content;
  background-color: skyblue;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 10px;
}
</style>
