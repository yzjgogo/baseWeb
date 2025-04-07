<template>
  <div class="test-root">
    <button @click="sendEmitter">发送emitter事件</button>
    <button @click="sendBroadcastChannel">发送BroadcastChannel事件</button>
    <button @click="sendCommonChannel">发送CommonChannel事件</button>
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
      const channel = new BroadcastChannel('test-channel')
      channel.postMessage('我是tabPage组件发出的Broadcast事件')
      console.log('发送事件到别的标签页')
    },
    sendCommonChannel(){
      //如果事件的发送方和接收方没有跨标签(同一个Windows)，则走commChannel里封装的Emitter通信；如果事件的发送方和接收方是跨标签(不同的Windows)，则走commChannel里封装的BroadcastChannel通信
      this.$commChannel.emit('testcommChannel', '我是tabPage组件发出的commChannel事件')
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


