const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitMananger {
  static initCore (app) {
    InitMananger.app = app
    InitMananger.initLoadRouters()
  }

  static initLoadRouters () {
    const apiDirectory = `${process.cwd()}/app/api-v1`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })


    function whenLoadModule (obj) {
      if (obj instanceof Router) {
        InitMananger.app.use(obj.routes)
      }
    }
  }
}

module.exports = InitMananger