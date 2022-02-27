const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //使用了HtmlWebpackPlugin插件就应该把publicPath去掉，否则路径有问题
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // alias: 别名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // 插件在这里配置
  plugins: [
      //BannerPlugin是webpack自带的插件
      new webpack.BannerPlugin('最终版权归aaa所有'),
      //自动在dist目录下生成一个index.html文件(可以指定模板来生成)
    // 将打包的js文件，自动通过script标签插入到body中
      //避免了项目根目录下的index.html不在dist里的尴尬
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      //压缩js文件
      new UglifyjsWebpackPlugin()
  ],

  //webpack搭建的本地服务器，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。
  //npm install --save-dev webpack-dev-server@2.9.1
  //看package.json->scripts->dev
  devServer: {
    //为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    contentBase: './dist',
    //页面实时刷新
    inline: true
  }
}