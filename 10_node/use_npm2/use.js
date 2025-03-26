/*

npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置,use_npm文件夹里还没有引入package.json文件
信息。例如：
⚫ 项目的名称、版本号、描述等
⚫ 项目中都用到了哪些包
⚫ 哪些包只在开发期间会用到
⚫ 那些包在开发和部署时都需要用到

这样多人协同开发时，就不需要将node_modules提交到git仓库中，只需要提交package.json文件即可。其他同时会通过package.json文件安装完全一样的依赖包。

快速创建 package.json：
1. 在项目根目录下，执行 npm init -y
    上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格。
    运行 npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.json 中。
    例如执行 npm install moment --save 时，会在 package.json 中添加 "moment": "^2.24.0"。


一次性按照package.json中所有的依赖包：npm i

卸载某个包：
npm uninstall moment

devDependencies 节点
如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中。
与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。
参考：参考：E:\web\baseWeb\WebpackStudy\02_使用了模块化CommonJS且使用webpack打包\index.html




解决包下载慢的问题：
在使用 npm 下包的时候，默认从国外的 https://registry.npmjs.org/ 服务器进行下载，此时，网络数据的传输需要经
过漫长的海底光缆，因此下包速度会很慢。

淘宝在国内搭建了一个服务器，专门把国外官方服务器上
的包同步到国内的服务器，然后在国内提供下包的服务。
从而极大的提高了下包的速度。
镜像（Mirroring）是一种文件存储形式，一个磁盘上的
数据在另一个磁盘上存在一个完全相同的副本即为镜像

切换镜像源方案一：
1:查看当前的下包镜像源：
npm config get registry
2：将下包镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/   //等于号用空格代替行吗
3：查看是否切换成功，仍然使用第一个命令
npm config get registry

切换镜像源方案二：
1：安装nrm工具
npm install -g nrm
2:查看所有的镜像源，当前的镜像源前面带星号
nrm ls
3：使用某个镜像源：
nrm use taobao

包的分类：
1：项目包
那些被安装到项目的 node_modules 目录中的包，都是项目包。
项目包又分为两类，分别是：
⚫ 开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到）
⚫ 核心依赖包（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）
2：全局包
在执行 npm install 命令时，如果提供了 -g 参数，则会把包安装为全局包。
全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下。
全局安装包：npm i 包名 -g
卸载全局包：npm uninstall 包名 -g
注意：
① 只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。
② 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可。
全局包举例：i5ting_toc
i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下：
1：全局安装 i5ting_toc
npm i i5ting_toc -g
2：使用 i5ting_toc 命令
i5ting_toc -f xxx.md -O


规范的包结构:看看node_modules/moment的结构
在清楚了包的概念、以及如何下载和使用包之后，接下来，我们深入了解一下包的内部结构。
一个规范的包，它的组成结构，必须符合以下 3 点要求：
① 包必须以单独的目录而存在
② 包的顶级目录下要必须包含 package.json 这个包管理配置文件
③ package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口。
以moment包为例:
"name": "moment"
"version": "2.30.1"
"main": "./moment.js" 这个很重要，require('moment')时，就是找的这个main属性指定的文件
注意：以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：
https://yarnpkg.com/zh-Hans/docs/package-json





*/