const Router = require('koa-router')

const router = new Router()

router.post('/v1/:id/book/hot_list', async (ctx, next) => {
  ctx.body = {
    key: 1
  }
})

module.exports = router