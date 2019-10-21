// 面向切面编程
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch(error) {
    ctx.body = '错误信息'
  }
}

module.exports = catchError