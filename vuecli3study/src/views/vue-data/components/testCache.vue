<template>
  <div class="test-root">
    <div class="session-box">
      <div class="line">测试sessionStorage,第二个页面</div>
      <button class="module-button" @click="getSessionStorage">根据key取数据：验证打开新的标签页仍然能取到sessionStorage的值</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testCache',
  data() {
    return { 
      
    }
  },
  created() {},
  methods: {
    getSessionStorage(){
      const cacheKeyData = sessionStorage.getItem('mykey');
      console.log('sessionStorage里存的数据是：',cacheKeyData);
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
  .session-box{
    //50%不透明度的黄色背景
    background-color: rgba(255, 255, 0, 0.2);
    margin: 10px;
  }
}
</style>
