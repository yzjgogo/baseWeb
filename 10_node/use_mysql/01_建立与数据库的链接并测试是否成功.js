// 1. 导入 mysql 模块
const mysql = require('mysql')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的 IP 地址，访问当前这台电脑的数据库，参考：04_数据库与身份认证.pptx
  user: 'root', // 登录数据库的账号，当时安装mysql时设置的，参考：04_数据库与身份认证.pptx
  password: 'admin123', // 登录数据库的密码，当时安装mysql时设置的，参考：04_数据库与身份认证.pptx
  database: 'my_db_01', // 指定要操作哪个数据库，当时学习的时候是在MySQL Workbench上创建的数据库创建的users表，且插入了几条数据，我们代码里能访问到这个数据库，参考：04_数据库与身份认证.pptx
})

// 测试 mysql 模块能否正常工作，'select 1' 是一条 SQL 语句，表示查询数字 1,不用理解什么意思，就这样测试用
db.query('select 1', (err, results) => {
  // mysql 模块工作期间报错了
  if(err) return console.log(err.message)
  // 能够成功的执行 SQL 语句
  console.log(results)//[ RowDataPacket { '1': 1 } 代表能正常工作
})

