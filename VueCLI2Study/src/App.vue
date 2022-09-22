<template>
  <div class='learning-tools'>
    <img src="./assets/logo.png">
    <div>vue-awesome-swiper使用步骤：<br>
      1：依赖版本引入：目前一般都用3.1.3这个版本比较稳定，参考图片：“vue-awesome-swiper版本引入.png”<br/>
      2:<br/>
      a:全局引入：参考“vue-awesome-swiper项目全局引入.png”<br/>
      b:组件引入：参考：“vue-awesome-swiper组件单独引入.png”<br/>
      3:swiper导入<br/>
      a:项目入口导入swiper：参考图片“项目入口导入swiper.png”<br>
      b:组件里导入swiper:参考图片“组件内导入swiper.png”<br/>
      官方主页：https://v1.github.surmon.me/vue-awesome-swiper/ <br>
      v3.1.1对应Github：https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3
    </div>
    <!--    <HelloWorld/>-->
    <swiper ref="mySwiper"
            :options="swiperOption"
            class="mySwiper_one"
            style="background-color: silver">
      <swiper-slide v-for="(item,index) in toolsSecondList"
                    :key="index"
                    class="swiper-item"
                    style="background-color: cornsilk">
        <img class="tools-icon"
             :src="item.icon"/>
        <div class="name">{{item.name}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  // import 'swiper/dist/css/swiper.css' 不可用了，可能是以前某个swiper版本可用
  // import 'swiper/swiper-bundle.css' //当前这个swiper版本可以这样用，就是node_modules/swiper/swiper-bundle.css
  // import 'swiper/swiper.less' ////当前这个swiper版本也可以这样用，就是node_modules/swiper/swiper.less
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          initialSlide: 0,
          slidesPerView: 5
        },
        toolsSecondList: [
          {
            id: 10013,
            name: '英语词典',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [7, 8, 9]
          },
          {
            id: 10014,
            name: '汉语词典',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [7, 8, 9]
          },
          {
            id: 10015,
            name: '作文库',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2]
          },
          {
            id: 10016,
            name: '古诗文',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [7, 8, 9]
          },
          {
            id: 10017,
            name: '名著阅读',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2, 3, 4, 5, 6]
          },
          {
            id: 10017,
            name: '名著阅二',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2, 3, 4, 5, 6]
          },
          {
            id: 10017,
            name: '名著阅三',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2, 3, 4, 5, 6]
          },
          {
            id: 10017,
            name: '名著阅四',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2, 3, 4, 5, 6]
          },
          {
            id: 10017,
            name: '名著阅五',
            icon: require('./images/tools_icon_12.png'),
            zhlGodPolicyKey: '',
            grade: [1, 2, 3, 4, 5, 6]
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.swiper = this.$refs.mySwiper.swiper
        this.swiper.init()
      })
    }
  }
</script>

<style lang='less' scoped>
  /*#app {*/
  /*}*/
  .learning-tools {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .mySwiper_one {
      padding: 40px 40px 40px;
    }

    .swiper-item {
      width: 200px !important;
      display: flex;
      flex-direction: column;
      align-items: center;

      .tools-icon {
        width: 100px;
        height: 100px;
      }

      .name {
        font-size: 30px;
        line-height: 30px;
        color: #666666;
        padding-top: 20px;
      }
    }
  }
</style>
