/**安装webpack-merge:用于配置文件合并
 * npm install webpack-merge@4.1.5 --save-dev --force
 * */
//1,导入webpack-merge
const webpackMerge = require('webpack-merge')
//2，导入base.config.js
const baseConfig = require('./base.config')
//3，利用webpack-merge将base.config.js的配置，与dev.config.js的配置合并到一起，作为开发阶段的最终配置
module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})