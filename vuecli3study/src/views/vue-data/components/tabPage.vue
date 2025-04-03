<template>
  <div class="test-root">
    <button @click="sendEmitter">发送emitter事件</button>
    <button @click="sendBroadcastChannel">发送BroadcastChannel事件</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'tabPage',
  props: {
    
  },

computed: {
  ...mapState({
    subject: (state) => state.studyTab.subject
  })
},
  data() {
    return {
    }
  },
  created() {
    console.log('拿到vuex的数据1',this.subject)
    
    this.$store.commit('studyTab/updateSubject', '水浒传===') 
    console.log('拿到vuex的数据2',this.subject)
  },
  methods:{
    sendEmitter(){
      this.$emitter.emit('testEmitter', '我是tabPage组件发出的事件')
    },
    sendBroadcastChannel(){
      // 发送事件到主窗口
      const channel = new BroadcastChannel('test-channel')
      channel.postMessage('我是tabPage组件发出的Broadcast事件')
      console.log('发送事件到别的标签页')
    }
  }
}
</script>

<style lang="less" scoped>
.test-root{
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
</style>


