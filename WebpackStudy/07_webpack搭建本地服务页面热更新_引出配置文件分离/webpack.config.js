const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    /**
     本地服务器的配置
     npm install --save-dev webpack-dev-server@2.9.3 --force  局部安装
     webpack搭建的本地服务器，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。
     在package.json -> scripts -> "dev": "webpack-dev-server --open"
     以后在命令行进行npm run dev即可实现热更新，其中--open指自动打开浏览器,编译完成后terminal有浏览器地址：?http://localhost:8080

     npm run dev(webpack-dev-server) 与 npm run build(webpack) 的关系：
     前者在开发阶段用于方便实时热更新调试使用，不会将代码打包到dist/bundle.js中，而是在内存中实时更新，速度更快，不信可以改点代码人后热更新后看看dist/bundle.js有没有变化
     后者在开发完成后，最终打包时使用，会将代码打包到dist/中

     补充：dist文件夹下要有index.html才有效，因此这里我使用了HtmlWebpackPlugin

     参考图片：本地服务器.png
     * */
    devServer: {
        //为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
        contentBase: './dist',
        //页面实时刷新
        inline: true,
        // port:8080  不指定也有默认端口号
        //historyApiFallback: 在SPA页面中，依赖HTML5的history模式

    }

}

/**
    这里有个问题：
    在开发阶段我们希望实现热更新，即使用npm run dev,但开发阶段我们不喜欢压缩代码不利于调试，因此
        开发阶段我们希望保留devServer的配置，但是去掉UglifyjsWebpackPlugin
        而打包阶段我们希望去掉devServer配置，而保留UglifyjsWebpackPlugin

    这就涉及到了配置文件分离，参考：08_配置文件开发阶段打包阶段分离
 * */