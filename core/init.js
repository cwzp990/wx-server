const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {
  static initCore (app) {
    InitManager.app = app
    InitManager.initLoadRouters()
  }
  static initLoadRouters () {
    // 导入目录下的所有模块
    const apiDirector = `${process.cwd()}/api`
    requireDirectory(module, apiDirector, {
      visit: obj => { //  回调函数
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes())
        }
      }
    })
  }
}

module.exports = InitManager