
//数据库连接抽取步骤1:定义db文件夹专门存放数据库连接的相关代码
const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01',
})

module.exports = db
