const path = require('path')


//BannerPlugin第1步,BannerPlugin是webpack自带的插件，因此导入webpack
const webpack = require('webpack')

//html-webpack-plugin用于在dist中生成index.html,可以让系统自动生成一个index.html，也可以指定模板(例如项目里的index.html)按照这个模板生成dist/index.html
//html-webpack-plugin第1步：安装 npm install html-webpack-plugin@3.2.0 --save-dev  package.json -> devDependencies -> html-webpack-plugin
//html-webpack-plugin第2步：如下导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

//uglifyjs-webpack-plugin用于对打包生成的js文件进行压缩，使用后查看dist/bundle.js可见已经压缩了
//其实webpack也有自带的压缩插件，但是视频里说使用自带的报错了，因此使用了这个与CLI2匹配的版本
//uglifyjs-webpack-plugin第1步：安装 npm install uglifyjs-webpack-plugin@1.1.1 --save-dev --force
//uglifyjs-webpack-plugin第2步：引入
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        //html-webpack-plugin第3步,因为是在dist下生成index.html，无需指定publicPath,即无需在路径前加dist/即可访问
        // 看考图片：打包html插件使用模板.png
        // publicPath: 'dist/'
    },
    /**
     插件定义到plugins里
     * */
    plugins:[
        //BannerPlugin第2步
        //在打包生成的bundle.js里添加头部注释，参考：dist/bundle.js最顶部
        new webpack.BannerPlugin("殷志杰的版权所有"),
        //html-webpack-plugin第2_1步：默认方式使用插件
        //直接new的方式，则系统没有参考模板，而是自动生成一个dist/index.html，这个index.html会自动引入dist/bundle.js,但是你需要手动添加<div id="app"></div>
        //此时这个dist/index.html与项目下你自己写的index.html无关，甚至项目下的这个相当于不存在
        //参考图片：打包html插件默认方式.png
        // new HtmlWebpackPlugin()

        //html-webpack-plugin第2_2步：指定生成dist/index.html的模板,这里是使用项目下的index.html作为模板，这个index.html模板里不用通过<script>标签引入bundle.js
        //生成的dist/index.html会自动引入,否则会导致重复引入
        //参考图片：打包html插件使用模板.png
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        //uglifyjs-webpack-plugin第3步：使用
        new UglifyjsWebpackPlugin()
    ]
}