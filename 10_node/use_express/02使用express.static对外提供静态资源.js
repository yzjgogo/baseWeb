const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源

//http://127.0.0.1/files/aa.txt  不能http://127.0.0.1/aa.txt
app.use('/files', express.static('./files'))

//http://127.0.0.1/index.html  不需要http://127.0.0.1/clock/index.html
app.use(express.static('./clock'))//在后，因此如果./clock里面有与./files里面相同的文件，会优先访问./clock里面的文件


app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
