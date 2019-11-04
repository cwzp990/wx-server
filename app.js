const koa = require('koa')
const parser = require('koa-bodyparser')

const InitManager = require('./core/init')
require('./app/modules/user.js')

const app = new koa()

app.use(parser())

InitManager.initCore(app)

app.listen(3000)