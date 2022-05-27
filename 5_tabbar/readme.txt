
5_tabbar项目只看这个'readme.txt'就行了

如果是导入的目录(文件夹)，则系统自动寻找这个目录里的index.js导入，同直接导入 ./目录/index.js一样
参考main.js里的import router from './router'，实际上是导入./router/index.js


导入assets里的css里的base.css文件
1，在js文件里导入(例如main.js)：
require('./assets/css/base.css')
2,.vue文件里的style标签里导入：
  @import "./assets/css/base.css";  注意有前面的@


slot上写的样式class，style等任意属性，替换插槽时可能就没了，因此一般我们可以用div包裹slot，然后给div设置class或style等属性，而slot始终只保持最多只有一个name属性
参考TabBarItem.vue里的slot


build/webpack.base.conf.js里的resolve字段里
extensions: ['.js', '.vue', '.json']
在extensions里声明过后,这些后缀类型的文件在导入时就可以省略后缀名了，

    //给路径起别名
    alias: {
      '@': resolve('src'),//@就代表src路径
      'assets': resolve('src/assets'),//这里用@/assets似乎不行
      'components': resolve('src/components'),
      'views': resolve('src/views'),
    }