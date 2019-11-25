const bcrypt = require('bcrypt')
const sequelize = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class User extends Model {}

User.init(
  {
    id: {
      // 默认生成
      type: Sequelize.INTEGER, // 最好不要用字符串，数字在数据库里查询是最快的
      primaryKey: true, // 主键：不能重复、不能为空
      autoIncrement: true // 自动增长
    },
    nickname: Sequelize.STRING,
    password: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10)
        const psw = bcrypt.hashSync(val, salt)
        this.setDataValue('password', psw)
      }
    },
    openId: {
      type: Sequelize.STRING(64),
      unique: true // 唯一
    }
  },
  {
    sequelize,
    tableName: 'user'
  }
)

module.exports = {
  User
}
