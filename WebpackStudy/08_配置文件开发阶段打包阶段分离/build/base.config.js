
/**
    base.config.js从webpack.config.js复制过来的，然后把webpack.config.js删除了，
    然后保留prod.config.js和dev.config.js的公共部分，
    去掉只属于prod.config.js或dev.config.js的部分

    dev.config.js
    是开发阶段的配置，比如我开发阶段希望能热更新，因此dev.config.js里配置了webpack-dev-server
    因为webpack.config.js不存在了，因此package.json -> scripts -> dev做如下配置：
    "dev": "webpack-dev-server --open --config ./build/dev.config.js"
    指定dev.config.js作为其配置文件，避免因找不到webpack.config.js而报错


    prod.config.js
    是打包时的配置，比如打包时我希望打包出的js代码被压缩，因此prod.config.js里配置了插件plugins：UglifyjsWebpackPlugin
    因为webpack.config.js不存在了，因此package.json -> scripts -> build做如下配置：
    "build": "webpack --config ./build/prod.config.js"
    执行prod.config.js作为其配置文件，避免因找不到webpack.config.js而报错

    参考：配置文件分离图片.png
 * */

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        //因为__dirname是base.config.js所在的目录，所以要把'dist'改为'../dist'才能保证被打包到项目目录下的dist下，否则就是被打包到build/dist下了
        path: path.resolve(__dirname,'../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        /**base.config.js里不配置，在prod.config.js里配置*/
        // new UglifyjsWebpackPlugin()
    ],
    /**base.config.js里不配置，在dev.config.js里配置*/
    // devServer: {
    //     contentBase: './dist',
    //     inline: true,
    // }

}