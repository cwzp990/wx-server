const Router = require('koa-router')
const { User } = require('../modules/user.js')
const { RegisterValidator } = require('../validators/validator.js')

// 路由前缀
const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async ctx => {
  const v = new RegisterValidator().validate(ctx)

  // 将数据保存到数据库
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname'),
  }

  User.create(user)
})

module.exports = router