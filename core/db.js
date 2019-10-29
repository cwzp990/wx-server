const Sequelize = require('sequelize')

const { dbname, host, port, user, password } = require('../config/config').datebase

const sequelize = new Sequelize(dbname, user, password, {
  dialect: 'mysql',
  host,
  port,
  lodding: true,
  timezone: '+08:00'
})

module.exports = sequelize
