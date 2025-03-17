<template>
  <div class="agreement-page" v-if="type">
    <h3 class="title">{{ title }}</h3>
    <div class="content" v-html="content" />
  </div>
</template>

<script>
import { joinContent } from './content'

export default {
  name: 'Agreement',
  data() {
    return {
      platformTitle: '无影',
      type: ''
    }
  },
  computed: {
    title() {
      return `${this.platformTitle}${
        this.type === 'user' ? '用户服务协议' : '会员服务协议'
      }`
    },
    content() {
      return joinContent(this.type)
    }
  },
  created() {
    const { type } = this.$route.query
    this.type = type || 'user'
  }
}
</script>

<style lang="less" scoped>
.agreement-page {
  padding: 20px;
  .title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 17px;
    margin-bottom: 30px;
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    &:has(p) {
      font-weight: 500;
    }
  }
  section {
    margin: 30px 0;
    section {
      margin: 0 0 15px;
      p {
        margin-bottom: 10px;
      }
    }
    h4 {
      margin-bottom: 15px;
    }
    &:last-child {
      margin-bottom: 0;
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
  .circle {
    padding: 0 10px;
    &::before {
      content: '◦';
    }
  }
  .square {
    padding: 0 20px;
    &::before {
      content: '▪';
    }
  }
  .circle::before,
  .square::before {
    display: inline-block;
    transform: scale(1.3);
    margin-right: 5px;
  }
}
</style>
