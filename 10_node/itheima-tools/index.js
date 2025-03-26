/*

开发，发布 自己的包步骤：
1：新建 itheima-tools 文件夹，作为包的根目录

2：在 itheima-tools 文件夹中，新建如下三个文件：
  package.json （包管理配置文件）
  本案例是自己手写的package.json，也可以使用npm init -y生成,然后填充相关信息
  其中涉及到"license": "ISC"，开源许可证：关于更多 license 许可协议相关的内容，可参考 https://www.jianshu.com/p/86251523e898
  description：包的描述，用户在https://www.npmjs.com搜索时，搜索框下拉提示语

  index.js （包的入口文件）
  package.json中的main属性会指向index.js文件

  README.md （包的说明文档）
  发布后网友能看到，本案例都是手写的，很逼真

3：编写逻辑代码

4：发布包
  1. 注册 npm 账号
① 访问 https://www.npmjs.com/ 网站，点击 sign up 按钮，进入注册用户界面
② 填写账号相关的信息：Full Name、Public Email、Username、Password
③ 点击 Create an Account 按钮，注册账号
④ 登录邮箱，点击验证链接，进行账号的验证
2. 登录 npm 账号
npm 账号注册完成后，可以在终端中执行 npm login 命令，依次输入用户名、密码、邮箱后，即可登录成功。
注意：在运行 npm login 命令之前，必须
先把下包的服务器地址切换为 npm 的官方
服务器。否则会导致发布包失败。
3. 把包发布到 npm 上
将终端切换到包的根目录之后，运行 npm publish 命令，即可将包发布到 npm 上（注意：包名不能雷同）。
4. 删除已发布的包
运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包。
注意：
① npm unpublish 命令只能删除 72 小时以内发布的包
② npm unpublish 删除的包，在 24 小时内不允许重复发布
③ 发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包！





*/

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
  ...date,
  ...escape
}
