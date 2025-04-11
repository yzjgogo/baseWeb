<template>
  <div class="test-root">
    <div class="session-box">
      <div class="line">sessionStorage</div>
      <div>
        sessionStorage有作用时间范围，即在一次会话周期内有效，所谓一次会话就是从打开打开这个域名开始，到关闭这个域名结束，此期间内容有效；在此期间内无论是刷新页面、恢复页面、还是window.open(rUrl,"_blank")打开新的标签页，sessionStorage里的数据都是存在的都能访问到；但是你打开这个网址后，另开一个标签页在此打开这个网址，则第二次跟第一个没有任何关系，第二次打开的访问不到第一次打开的sessionStorage数据；参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage<br>
        注意：sessionStorage只能存字符串，存对象需要JSON.stringify()，取对象需要JSON.parse()；<br>
      </div>
      <button class="module-button" @click="setSessionStorage">
        根据key存数据
      </button>
      <button class="module-button" @click="getSessionStorage">
        根据key取数据
      </button>
      <button class="module-button" @click="removeSessionStorage">
        根据key删数据
      </button>
      <button class="module-button" @click="clearSessionStorage">
        清除sessionstorage里的所有数据
      </button>
      <div class="module-div" @click="openTab">打开新的标签页</div>
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
        'mykey',
        JSON.stringify({ name: '刘德华', age: 18 })
      )
      console.log('sessionStorage保存成功')
    },
    getSessionStorage() {
      const cacheKeyData = sessionStorage.getItem('mykey')
      console.log('sessionStorage里存的数据是：', cacheKeyData,JSON.parse(cacheKeyData))
    },
    removeSessionStorage() {
      sessionStorage.removeItem('mykey')
      console.log('sessionStorage删除数据成功')
    },
    clearSessionStorage() {
      sessionStorage.clear()
      console.log('sessionStorage清空数据成功')
    },
    openTab() {
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
}
</style>
