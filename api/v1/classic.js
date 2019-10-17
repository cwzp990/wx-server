const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic', ctx => {
  ctx.body = {
    key: '分类'
  }
})

module.exports = router
