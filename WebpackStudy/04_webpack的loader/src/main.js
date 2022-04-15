const {sum} = require('./mathUtils.js')//可省略.js
sum()


import {height} from './info.js'//可省略.js
console.log(height)



/**
 使用CommonJS引入css文件，让css文件也参与模块化
 此时就需要css-loader和style-loader来赋予webpack加载解析css的能力，看考webpack.config.js
 * */
require('./css/normal.css')