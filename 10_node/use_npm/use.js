
/*

第三方模块（包） 类似于Java中的jar包，或android中的aar包等第三方依赖

参考：E:\web\baseWeb\WebpackStudy\02_使用了模块化CommonJS且使用webpack打包\index.html

当你想要某种第三方包时，做如下操作：
1：从 https://www.npmjs.com/ 网站上搜索自己所需要的包
2：使用npm install moment 等命令按照包，这个命令就会从 https://registry.npmjs.org/ 服务器上下载自己需要的包
3：npm是捆绑在node里一起安装的，可以npm -v查看版本
4：第一次执行npm install安装完毕后，会在当前目录多了node_modules 的文件夹和 package-lock.json 的配置文件
    node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包。我提交代码时把node_modules文件夹删除了，因为这个文件夹太大了，提交到git仓库中会很慢,想看的话可以自己安装一下
    package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。
5：使用安装的包，参考下面的代码，使用require('moment')导入   
6：npm install moment@2.24.0 安装指定版本的包
   其中每一位数字所代表的的含义如下：
    第1位数字：大版本
    第2位数字：功能版本
    第3位数字：Bug修复版本 
    版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。
*/

// 1. 导入需要的包
// 注意：导入的名称，就是装包时候的名称
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt)
