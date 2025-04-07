
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'admin123',
  database: 'my_db_01',
})

// 演示如何更新用户的信息
const user = { id: 6, username: 'aaa', password: '000' }
// 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
  if (results.affectedRows === 1) {
    console.log('更新成功')
  }
}) 
