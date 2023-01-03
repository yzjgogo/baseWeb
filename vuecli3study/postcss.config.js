module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    /*
      px自动转rem步骤：参考：px转rem.png
      https://www.jianshu.com/p/7acdb535fcd5
      https://www.jianshu.com/p/4d3b97f7a48b
      1：package.json里引入 "amfe-flexible": "2.2.1", "postcss-pxtorem": "5.1.1"
      2：main.js里import 'amfe-flexible'
      3：这里的postcss.config.js文件配置postcss-pxtorem
      4：public/index.html里配置<meta name="viewport"/>

      postcss-pxtorem：
      https://www.npmjs.com/package/postcss-pxtorem
      将px转换为px，行内样式无效，因此建议样式都写到<style></style>里，参考：https://blog.csdn.net/guixin12345/article/details/125920852

      amfe-flexible：
      https://www.npmjs.com/package/amfe-flexible
      https://github.com/amfe/lib-flexible/tree/master
      为html、body添加font-size，窗口调整时候重新设置font-size，这是rem自适应屏幕的核心

      postcss：
      https://www.postcss.com.cn/
      postcss可以理解为是一个处理css的工具库，他包含了很多处理css的插件，例如：
      autoprefixer：自动添加浏览器前缀，参考：E:\web\JsBase\01_HtmlCssBase\97浏览器前缀.html
      postcss-pxtorem：将px转化为rem
      postcss-import:用于原生css的导入，不需要css预处理器就能实现(less)
      postcss-mixins:用于原生css的混入(css代码的抽取)，不需要css预处理器就能实现(less)

      使用postcss-pxtorem时，虽然没有在vuecli3study\package.json里引入"postcss": "8.3.6", "postcss-loader": "6.1.1",
      但是实际上vue的cli3已经自动引入了，参考：vuecli3study/node_modules/@vue/cli-service/package.json里的"postcss": "^8.2.6","postcss-loader": "^6.1.1",
      一般使用postcss下的某个插件，都要引入"postcss": "x.x.x"


    * */
    'postcss-pxtorem': {
      rootValue: 37.5, // 这是基准值，在375px的屏幕变大rem的值会变大，小于这个大小元素的rem值会变小
      propList: ['*'] // 设置px转换成rem的属性值，*表示所有属性的px转换为rem
    }
  }
}
