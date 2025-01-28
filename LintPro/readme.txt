1:使用npm创建一个普通(不是vue和react)的前端项目
npm init (-y)
会生成package.json文件，用于各种第三方包的管理

2：使用npm install eslint --save-dev
当时视频教程安装的eslint版本是6.0.1，学的时候已经是很高的版本了，大概是9.x.x，
如果仍然用npm install eslint --save-dev则在package.json中看到安装的eslint其实是
    "@eslint/js": "^9.x.x"大概是合格样子，我记不清是不是@js了，且eslint的用法也与6.0.1不同，因此
    我使用npm install eslint@6.0.1 --save-dev安装，在package.json中看到安装的是"eslint": "^6.0.1"
    这样就和当时的视频教程一致了。以后想用新版再研究

3：在package.json中的script字段执行命令lint和lint:create
"scripts": {
    "lint:create": "eslint --init",
    "lint": "eslint app.js"
  }
a:执行npm run lint:create或者npx eslint --init可以初始化eslint  :
➜ npx eslint --init
? How would you like to use ESLint? (Use arrow keys)
  To check syntax only 
❯ To check syntax and find problems 
  To check syntax, find problems, and enforce code style 
  
? What type of modules does your project use? (Use arrow keys)
❯ JavaScript modules (import/export) 
  CommonJS (require/exports) 
  None of these 
  
// 这里可以针对你的开发项目进行配置
? Which framework does your project use? 
  React 
  Vue.js 
❯ None of these 

// 可以配置代码运行的地方，是浏览器还是Node环境？
? Where does your code run? 
❯◉ Browser
 ◉ Node
 
// 最张在哪里缓存
? What format do you want your config file to be in? (Use arrow keys)
❯ JavaScript 
  YAML 
  JSON 

// 成功创建了配置文件
? What format do you want your config file to be in? JavaScript
Successfully created .eslintrc.js file in /Users/itheima/Downloads/Demo

最终会生成.eslintrc.js

b:以后想使用eslint检验某个js文件，例如app.js则执行npm run lint即可；  


4：以"no-unused-vars"为例，解释.eslintrc.js中的rules的用法：
Rules：

“off” 或 0 - 关闭规则
“warn” 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
“error” 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

no-unused-vars：禁止未被使用的变量出现。https://eslint.nodejs.cn/docs/rules/no-unused-vars
a:在app.js中定义var t = "Hello world";
b：在.eslintrc.js中的rules中指定如下中的任意一个：
 'no-unused-vars' : ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
 'no-unused-vars' : ["error", "all"]
 'no-unused-vars' : [2, "all"]
 'no-unused-vars' : 2
 'no-unused-vars' : 'error'
c:执行npm run lint或npx eslint app.js则在terminal中会报错：no-unused-vars-error.png
d:\web\LintPro\app.js
  2:5  error  't' is assigned a value but never used  no-unused-vars

✖ 1 problem (1 error, 0 warnings)
e:解决办法：
e1:把b中的error改成off或者2改成0
e2:临时改变eslint针对var t的规则，给t添加注释/* eslint no-unused-vars:0*/，想取消掉这个注释可以再把这个注释给注释掉(前面加//)

5:在讲no-console和no-debugger时，用到了corss-env(参考.eslintrc.js中的no-console和no-debugger):https://www.npmjs.com/package/cross-env
背景是这样的，在js代码中可以访问node当前的开发环境:process.env.NODE_ENV(app.js中用到)，默认开发时是undefined(我以为是development)
，正式环境是production；我们希望开发时允许使用console和debugger但生成环境(production)时禁止使用console和debugger
，因此我们希望模拟node的生成环境，cross-env就可以修改process.env.NODE_DEV的值，参考package.json中的：
  "scripts": {
    "js": "cross-env NODE_ENV=production node app.js"
  },
该js(任意命名)的含义是使用cross-env把production赋值给process.env.NODE_ENV,然后使用node执行app.js
此时执行npm run js就会发现app.js的console输出的process.env.NODE_ENV是production.
然后我们可以修改package.json中的scripts中的lint命令为：

  "scripts": {
    "lint": "cross-env NODE_ENV=production eslint app.js"
  }
解释与"cross-env NODE_ENV=production node app.js"类似，即在执行eslint app.js之前把production赋值给process.env.NODE_ENV
然后，.eslintrc.js中的no-console和no-debugger就会根据process.env.NODE_ENV的值的不同使用不同的规则。

6:给vscode安装eslint插件实现eslint检测到不符合规则的时候自动修复
a:安装插件eslint,参考图片：eslint-plugin.jpg
b:vscode的左下角齿轮 -> settings -> 搜索eslint -> (eslint-auto-fix-config-enter.jpg)
-> (eslint-auto-fix-detail.jpg)
c:然后编辑任意js文化，如果eslit检测到有不符合rules的写法，就会飘红，然后无论你是否开启了vscode的自动保存，只需要按Ctrl+S即可一键自动修复到符合规则