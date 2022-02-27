
import Vue from 'vue'

//el和template同时出现时，template指定的模板会直接替换掉el对应的id为app的那个view，例如这里template会替换掉index.html里的
// <div id="app">
// </div>
//而不是放到这个div里面
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
        name: "yzjgogo"
    },
    methods: {
        btnClick() {
            console.log("dddddd");
        }
    }
})
