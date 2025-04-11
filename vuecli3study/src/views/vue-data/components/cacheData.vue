<template>
  <div class="test-root">
    <div class="session-box">
      <div class="line">sessionStorage</div>
      <div>
        sessionStorage有作用时间范围，即在一次会话周期内有效，所谓一次会话就是从打开打开这个域名开始，到关闭这个域名结束，此期间内容有效；在此期间内无论是刷新页面、恢复页面、还是window.open(rUrl,"_blank")打开新的标签页，sessionStorage里的数据都是存在的都能访问到；但是你打开这个网址后，另开一个标签页在此打开这个网址，则第二次跟第一个没有任何关系，第二次打开的访问不到第一次打开的sessionStorage数据；参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage<br>
        注意：<br/>sessionStorage只能存字符串，存对象需要JSON.stringify()，取对象需要JSON.parse()；<br>
        sessionStorage只能存储在同一个域名下的值，跨域名访问不到；<br>
        虽然同源但是协议不同也访问不到？例如http://so.com与https://so.com彼此访问不到对方的sessionStorage<br>
        F12 -> Application -> Storage -> Session Storage可以查看sessionStorage里的数据<br>
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
      <div class="module-div" @click="openSessionStorageTab">打开新的标签页</div>
    </div>
    <div class="local-box">
      <div class="line">localStorage</div>
      <div>
        localStorage与sessionStorage的用法类似，区别在于localStorage是永久存储的，除非手动删除，否则一直存在；<br>
        F12 -> Application -> Storage -> Local Storage可以查看localStorage里的数据<br>
        
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
  </div>
</template>

<script>
export default {
  name: 'cacheData',
  data() {
    return {}
  },
  created() {},
  methods: {
    setSessionStorage() {
      sessionStorage.setItem(
        'mySessionStoragekey',
        JSON.stringify({ name: '刘德华', age: 18 })
      )
      console.log('sessionStorage保存成功')
    },
    getSessionStorage() {
      const cacheKeyData = sessionStorage.getItem('mySessionStoragekey')
      console.log('sessionStorage里存的数据是：', cacheKeyData,JSON.parse(cacheKeyData))
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
      window.open(rUrl,"_blank")
    },
    setlocalStorage() {
      localStorage.setItem(
        'mylocalStoragekey',
        JSON.stringify({ name: '郭德纲', age: 98 })
      )
      console.log('localStorage保存成功')
    },
    getlocalStorage() {
      const cacheKeyData = localStorage.getItem('mylocalStoragekey')
      console.log('localStorage里存的数据是：', cacheKeyData,JSON.parse(cacheKeyData))
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
      window.open(rUrl,"_blank")
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
}
</style>
