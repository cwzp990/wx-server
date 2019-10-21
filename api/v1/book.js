const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/book', ctx => {
  const params = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.headers
  const body = ctx.request.body
})

module.exports = router
