const Router = require('koa-router')
const { User } = require('../modules/user.js')
const { RegisterValidator } = require('../validators/validator.js')

// 路由前缀
const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async ctx => {
  ctx.body = {
    msg: 'success'
  }

  User.create({
    nickname: 'cwzp990',
    password: '123456',
    email: 'cwzp990@163.com'
  })
})

module.exports = router
