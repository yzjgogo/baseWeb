const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module:{
    //npm install vue-loader@13.0.0 vue-template-compiler@2.5.21 --save-dev
    //webpack识别.vue文件的load
    rules:[
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // alias: 别名，以.js  .css  .vue结尾的文件导入时可以省略.js  .css  .vue
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}