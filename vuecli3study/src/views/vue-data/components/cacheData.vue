<template>
  <div class="test-root">
    <div>
      参考：<br />
      几种前端数据存储.md <br />
      https://juejin.cn/post/7278245644271665212<br />
      https://localforage.docschina.org/#localforage
    </div>
    <div class="session-box">
      <div class="line">sessionStorage</div>
      <div>
        sessionStorage有作用时间范围，即在一次会话周期内有效，所谓一次会话就是从打开打开这个域名开始，到关闭这个域名结束，此期间内容有效；在此期间内无论是刷新页面、恢复页面、还是window.open(rUrl,"_blank")打开新的标签页，sessionStorage里的数据都是存在的都能访问到；但是你打开这个网址后，另开一个标签页在此打开这个网址，则第二次跟第一个没有任何关系，第二次打开的访问不到第一次打开的sessionStorage数据；参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage<br />
        注意：<br />sessionStorage只能存字符串，存对象需要JSON.stringify()，取对象需要JSON.parse()；<br />
        sessionStorage只能存储在同一个域名下的值，跨域名访问不到；<br />
        虽然同源但是协议不同也访问不到？例如http://so.com与https://so.com彼此访问不到对方的sessionStorage<br />
        F12 -> Application -> Storage -> Session
        Storage可以查看sessionStorage里的数据<br />
        sessionStorage的存储大小限制在5M左右，具体看浏览器；<br />
      </div>
      <button class="module-button" @click="setSessionStorage">
        根据key存SessionStorage数据
      </button>
      <button class="module-button" @click="getSessionStorage">
        根据key取SessionStorage数据
      </button>
      <button class="module-button" @click="removeSessionStorage">
        根据key删SessionStorage数据
      </button>
      <button class="module-button" @click="clearSessionStorage">
        清除sessionstorage里的所有数据
      </button>
      <div class="module-div" @click="openSessionStorageTab">
        打开新的标签页
      </div>
    </div>
    <div class="local-box">
      <div class="line">localStorage</div>
      <div>
        localStorage与sessionStorage的用法类似，区别在于localStorage是永久存储的，除非手动删除，否则一直存在；其它都和sessionStorage一样，包括存储大小限制等<br />
        localStorage如果存储内容多的话会消耗内存空间，会导致页面变卡。<br />
        F12 -> Application -> Storage -> Local
        Storage可以查看localStorage里的数据<br />
      </div>
      <button class="module-button" @click="setlocalStorage">
        根据key存localStorage数据
      </button>
      <button class="module-button" @click="getlocalStorage">
        根据key取localStorage数据
      </button>
      <button class="module-button" @click="removelocalStorage">
        根据key删localStorage数据
      </button>
      <button class="module-button" @click="clearlocalStorage">
        清除localStorage里的所有数据
      </button>
      <div class="module-div" @click="openlocalStorageTab">打开新的标签页</div>
    </div>
    <div class="IndexedDB-box">
      <div class="line">IndexedDB</div>
      <div>
        IndexedDB是一种底层API，没有存储大小限制；localStorage如果存储内容多的话会消耗内存空间，会导致页面变卡。而IndexedDB执行的操作是异步执行的，不会阻塞应用程序，可在Web
        Worker 使用。<br />
        参考：几种前端数据存储.md <br />
        https://juejin.cn/post/7278245644271665212<br />
        IndexedDB用起来比较麻烦，可以直接使用localforage，内部封装了IndexedDB、WEBSQL、LOCALSTORAGE
      </div>
    </div>
    <div class="localforage-box">
      <div class="line">localforage</div>
      <div>
        localforage，内部封装了IndexedDB、WEBSQL、LOCALSTORAGE，兼容性很好，内部遇到兼容性问题会自动优雅降级(自动？设置了driver:
        localforage.INDEXEDDB后还会自动吗？用的时候再研究)<br />
        localForage 有一个优雅降级策略，若浏览器不支持 IndexedDB 或
        WebSQL，则使用localStorage。在所有主流浏览器中都可用：Chrome，Firefox，IE
        和Safari（包括 Safari Mobile）<br />
        localforage可以存储的数据不需要JSON序列号，可以存储Array、ArrayBuffer、Blob、Float32Array、Float64Array、Int8Array、Int16Array、Int32Array、Number、Object、Uint8Array、Uint8ClampedArray、Uint16Array、Uint32Array、String等<br />
        没有大小限制、没有时间限制、没有同源限制吗？、没有协议限制吗？、没有域名限制吗？<br />
        安装：npm install localforage <br />
        配置：看本文的‘localforage配置’<br />
        参考：https://github.com/localForage/localForage<br />
        https://localforage.docschina.org/#localforage<br />
        这里只展示增删改查常用用法，更多用法可以参考官网<br />
      </div>
      <button class="module-button" @click="setlocalforage">
        根据key存localforage数据
      </button>
      <button class="module-button" @click="getlocalforage">
        根据key取localforage数据
      </button>
      <button class="module-button" @click="removelocalforage">
        根据key删localforage数据
      </button>
      <button class="module-button" @click="clearlocalforage">
        清除localforage里的所有数据
      </button>
      <!-- <div class="module-div" @click="openlocalStorageTab">打开新的标签页</div> -->
    </div>
  </div>
</template>

<script>
/*
localforage配置：如果使用时不配置，则使用默认配置
localforage.config({
  //按顺序使用的首选驱动,默认值：[localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  // 数据库的名称，默认值：'localforage'
  name: "localforageTest", 
  //数据仓库的名称,默认值：'keyvaluepairs'
  storeName: "localforageStore", 
  //数据库的大小（以字节为单位）。现在只用于WebSQL。 默认值：4980736
  size: 1024 * 500, 
  //数据库的版本。将来可用于升级; 目前未使用。默认值：1.0
  version: 1.0, 
  //数据库的描述，一般是提供给开发者的。默认值：''
  description: "", 
});

*/
import localforage from 'localforage'
export default {
  name: 'cacheData',
  data() {
    return {}
  },
  created() {
    //可以进行配置，看F12 -> Application > Storage > IndexedDB > yzj-baseweb 
    localforage.config({
      driver: localforage.INDEXEDDB,
      name: 'yzj-baseweb' // 数据库的名称
    })
  },
  methods: {
    /**
     * sessionStorage
     */
    setSessionStorage() {
      sessionStorage.setItem(
        'mySessionStoragekey',
        JSON.stringify({ name: '刘德华', age: 18 })
      )
      console.log('sessionStorage保存成功')
    },
    getSessionStorage() {
      const cacheKeyData = sessionStorage.getItem('mySessionStoragekey')
      console.log(
        'sessionStorage里存的数据是：',
        cacheKeyData,
        JSON.parse(cacheKeyData)
      )
    },
    removeSessionStorage() {
      sessionStorage.removeItem('mySessionStoragekey')
      console.log('sessionStorage删除数据成功')
    },
    clearSessionStorage() {
      sessionStorage.clear()
      console.log('sessionStorage清空数据成功')
    },
    openSessionStorageTab() {
      const rUrl = this.$router.resolve({
        name: 'testCache'
      }).href
      window.open(rUrl, '_blank')
    },
    /**
     * localStorage
     */
    setlocalStorage() {
      localStorage.setItem(
        'mylocalStoragekey',
        JSON.stringify({ name: '郭德纲', age: 98 })
      )
      console.log('localStorage保存成功')
    },
    getlocalStorage() {
      const cacheKeyData = localStorage.getItem('mylocalStoragekey')
      console.log(
        'localStorage里存的数据是：',
        cacheKeyData,
        JSON.parse(cacheKeyData)
      )
    },
    removelocalStorage() {
      localStorage.removeItem('mylocalStoragekey')
      console.log('localStorage删除数据成功')
    },
    clearlocalStorage() {
      localStorage.clear()
      console.log('localStorage清空数据成功')
    },
    openlocalStorageTab() {
      const rUrl = this.$router.resolve({
        name: 'testCache'
      }).href
      window.open(rUrl, '_blank')
    },
    /**
     * localforage
     */
    setlocalforage() {
      console.log('执行setlocalforage1')
      console.log('执行setlocalforage2', localforage)
      localforage
        .setItem('mylocalStoragekey', { name: '于谦前', age: 35 })
        .then((res) => {
          console.log('localforage保存数据成功', res)
        })
        .catch((err) => {
          console.log('localforage保存数据失败', err)
        })
    },
    getlocalforage() {
      console.log('执行getlocalforage')
      localforage
        .getItem('mylocalStoragekey')
        .then((res) => {
          console.log('localforage里存的数据是：', res)
        })
        .catch((err) => {
          console.log('localforage获取数据失败', err)
        })
    },
    removelocalforage() {
      localforage
        .removeItem('mylocalStoragekey')
        .then((res) => {
          console.log('localforage删除数据成功', res)
        })
        .catch((err) => {
          console.log('localforage删除数据失败', err)
        })
    },
    clearlocalforage() {
      localforage
        .clear()
        .then((res) => {
          console.log('localforage清空数据成功', res)
        })
        .catch((err) => {
          console.log('localforage清空数据失败', err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.test-root {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  .session-box {
    background-color: rgba(255, 255, 0, 0.2);
    margin: 10px;
  }
  .local-box {
    background-color: rgba(255, 0, 0, 0.2);
    margin: 10px;
  }
  .IndexedDB-box {
    background-color: rgba(0, 255, 0, 0.2);
    margin: 10px;
  }
  .localforage-box {
    background-color: rgba(0, 0, 255, 0.2);
    margin: 10px;
  }
}
</style>
