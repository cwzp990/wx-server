const Koa = require('koa')
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

const app = new Koa()

// 需要将路由拆分
app.use(book.routes())
app.use(classic.routes())

app.listen(3000)