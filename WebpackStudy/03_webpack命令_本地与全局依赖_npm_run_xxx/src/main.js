/**
    main.js是程序的入口
 * */

/**
    使用CommonJS的模块化工具
 * */
const {sum} = require('./mathUtils.js')//可省略.js
sum()

/**
    使用ES6的模块化工具
 * */
import {height} from './info.js'//可省略.js
console.log(height)
/**
    使用AMD和CMD等模块化工具也可以
 * */