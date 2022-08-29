const path = require('path')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    resolve:{
        alias:{
            // 'vue$':'vue/dist/vue.runtime.js' 默认是这个,即runtime-only ,就是node_modules/vue/dist/vue.runtime.js
            'vue$':'vue/dist/vue.esm.js' //我们改成这个，即runtime-compiler ,就是node_modules/vue/dist/vue.esm.js
        }
    }
}