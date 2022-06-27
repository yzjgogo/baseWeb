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
    module:{
      rules:[
          {
              test: /\.(png|jpg|gif|jpeg)$/,
              use: [
                  /**
                   图片打包关键要用到 file-loader 或url-loader，其中 url-loader 与 file-loader 功能基本一致，只不过 url-loader 能将小于某个大小的图片进行base64格式的转化处理

                   https://blog.csdn.net/shrimp6/article/details/123967239
                   * */
                  {
                      loader: 'file-loader',
                      options: {
                          //limit：对于file-loader，limit无效，并不像url-loader那样可以将小于limit的图片以base64图片加载
                          name: 'img/[name].[hash:8].[ext]'
                      },
                  },
                  // {
                  //     loader: 'url-loader',
                  //     options: {
                  //         limit: 10000,
                  //         name: 'img/[name].[hash:8].[ext]'
                  //     },
                  // }
              ]
          }
      ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer: {
        //为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
        contentBase: './dist',
        //页面实时刷新
        inline: true,
        // port:8080  不指定也有默认端口号
        //historyApiFallback: 在SPA页面中，依赖HTML5的history模式

    }

}