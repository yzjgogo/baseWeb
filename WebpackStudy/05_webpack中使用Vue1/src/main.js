
import Vue from 'vue'

//el和template同时出现时，template指定的模板会直接替换掉el对应的id为app的那个view，例如这里template会替换掉index.html里的
// <div id="app">
// </div>
//而不是放到这个div里面
//通过引入template字段，解决了以后频繁修改index.html的尴尬(非常适合单页面应用开发)，参考05_webpack中使用Vue0 -> src -> main.js -> 5里的疑问
new Vue({
    el: '#app',
    template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
    data: {
        message: "hello webpack",
        name: "yzjgogo1"
    },
    methods: {
        btnClick() {
            console.log("dddddd");
        }
    }
})

//问题：引入template字段后，又有新的问题了，如果在template里写非常复杂的逻辑，则template会变得越来越臃肿，怎么办呢？参考：05_webpack中使用Vue2
