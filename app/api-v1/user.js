const Router = require('koa-router')
const { User } = require('../modules/user.js')
const { RegisterValidator } = require('../validators/validator.js')

// 路由前缀
const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  // 密码加密
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname')
  }

  const r = await User.create(user)
  throw new global.errs.Success()
})

module.exports = router
