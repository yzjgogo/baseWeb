
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'admin123',
  database: 'my_db_01',
})

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值为 pcc123,当时在MySQL Workbench上创建users表的时候，设计的就是id自增的，且id是主键，status默认值为0，因此新增数据是没有给id和status赋值
const user = { username: 'Spider-Man1', password: 'pcc123' }
// 定义待执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 执行 SQL 语句，user.username给第一个？，user.password给第二个？
db.query(sqlStr, [user.username, user.password], (err, results) => {
  // 执行 SQL 语句失败了
  if (err) return console.log(err.message)
  // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
  // 可以通过 affectedRows 属性，来判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log('插入数据成功!',results)
  }
})

/*

插入数据成功! OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 23,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

*/
