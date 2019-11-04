const Sequelize = require('sequelize')

const { dbname, host, port, user, password } = require('../config/config').datebase

const sequelize = new Sequelize(dbname, user, password, {
  dialect: 'mysql', // 数据库类型
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {}
})

sequelize.sync()

module.exports = sequelize
