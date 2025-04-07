
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'admin123',
  database: 'my_db_01',
})

// 演示插入数据的便捷方式,在03_1_向表中新增数据.js中，如果要插入的字段很多，就很麻烦，这里提供了一个便捷的方式
// const user = { username: 'Spider-Man2', password: 'pcc4321', hhh: 'pcc4321' } //插入失败，报错，因为表中没有hhh这个这个字段
const user = { username: 'Spider-Man2', password: 'pcc4321' }//插入成功
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users set ?'
// 执行 SQL 语句，user里的每一个字段都会在表中一一找到
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('插入数据成功')
  }
})
