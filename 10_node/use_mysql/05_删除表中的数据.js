
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'admin123',
  database: 'my_db_01',
})

// 删除 id 为 5 的用户
const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 5, (err, results) => {
  if (err) return console.log(err.message)
  // 注意：执行 delete 语句之后，结果也是一个对象，也会包含 affectedRows 属性
  if (results.affectedRows === 1) {
    console.log('删除数据成功')
  }
})


//删除操作很危险，为了安全起见，我们可以定义一个字段表示是否已删除，而不是真正的删除它