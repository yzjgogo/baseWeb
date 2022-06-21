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
    data() {
        return {
            message: "hello webpack",
            name: "yzjgogo2"
        }
    },
    methods: {
        btnClick() {
            console.log("dddddd");
        }
    }
}
new Vue({
    //4，<App/>(App下的template)会替换掉#app
    el: '#app',
    //3，template的模板使用在root里注册(引入)得这个子组件，
    template: '<App/>',
    //2，第1步定义的组件作为root的子组件，进行注册
    components: {
        App
    }
})

//这样把template抽取出一个独立的组件就解决了：05_webpack中使用Vue1 -> src -> main.js -> 最后的疑问
//但是又有新的问题，虽然我们把template抽取出来了，但是仍然无法避免在抽取后的template里写臃肿的逻辑，怎么解决呢，参考：05_webpack中使用Vue3
