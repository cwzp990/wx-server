const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app) // 初始化路由

app.listen(3000)