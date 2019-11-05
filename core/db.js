const Sequelize = require('sequelize')

const { dbname, host, port, user, password } = require('../config/config').datebase

const sequelize = new Sequelize(dbname, user, password, {
  dialect: 'mysql', // 数据库类型
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamp: true, // create_time update_time delete_time
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }
})

sequelize.sync({
  force: false // 将模型创建到数据库中
})

module.exports = sequelize
