'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: '名前を入力してください。',
          },
        },
      },
      pass: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'パスワードを入力してください。',
          },
        },
      },
      mail: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'メールアドレスを入力してください。',
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: '整数を入力してください。',
          },
          min: {
            args: [0],
            msg: 'ゼロ以上の値を入力してください。',
          },
        },
      },
    },
    {}
  )

  User.associate = (models) => {
    // User.hasMany(models.Board)
    User.hasMany(models.Markdata)
  }

  return User
}
