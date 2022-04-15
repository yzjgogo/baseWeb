const {sum} = require('./mathUtils.js')//可省略.js
sum()


import {height} from './info.js'//可省略.js
console.log(height)



/**
 使用CommonJS引入css文件，让css文件也参与模块化
 此时就需要css-loader和style-loader来赋予webpack加载解析css的能力，看考webpack.config.js
 * */
require('./css/normal.css')

/**
 使用CommonJS引入less文件，让less文件也参与模块化
 此时就需要less-loader，css-loader和style-loader来赋予webpack加载解析lessss的能力，参考webpack.config.js
 * */
require('./css/special.less')
document.writeln('<h2>你好啊,李银河!</h2>')


/**
    测试加载图片，bg.css里的background使用了图片
    此时需要url-loader和file-loader(安装即可，不用配置)
 * */
require('./css/bg.css')