
const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'admin123',
  database: 'my_db_01',
})

const sqlStr = 'select * from users'
db.query(sqlStr, (err, results) => {
  // 查询数据失败
  if (err) return console.log(err.message)
  // 查询数据成功
  // 注意：如果执行的是 select 查询语句，则执行的结果是数组
  console.log(results)
})


/*
查询结果：

[
  RowDataPacket {
    id: 1,
    username: 'zhangsan',
    password: '123456',
    status: 0
  },
  RowDataPacket {
    id: 2,
    username: '李四',
    password: 'abc456',
    status: 0
  },
  RowDataPacket {
    id: 3,
    username: 'wangwu',
    password: '654321',
    status: 1
  },
  RowDataPacket {
    id: 4,
    username: 'liuneng',
    password: '888888',
    status: 0
  },
  RowDataPacket {
    id: 5,
    username: 'tony stark',
    password: '098123',
    status: 0
  }
]
*/
