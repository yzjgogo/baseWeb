
import Vue from 'vue'

//1，定义一个组件
const App = {
  template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
  data: {
    message: "hello webpack",
    name: "yzjgogo"
  },
  methods: {
    btnClick() {
      console.log("dddddd");
    }
  }
}
new Vue({
  //4，<App/>会替换掉#app
  el: '#app',
  //3，template的模板使用在root里注册(引入)得这个子组件，
  template: '<App/>',
  //2，第1步定义的组件作为root的子组件
  components: {
    App
  }
})
