<template>
  <h2>{{categories}}</h2>
</template>

<script>
  // 可扩展性不好，难以维护
  import axios from 'axios'
  // import android from 'android'

  export default {
    name: "HelloWorld",
    data() {
      return {
        categories: ''
      }
    },
    created() {
      axios({
        url: 'http://123.207.32.32:8000/category'
      }).then(res => {
        this.categories = res;
      })
      // android.ios({
      //
      // })
    }
  }
</script>

<style scoped>

</style>
