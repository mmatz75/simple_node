'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    'Board',
    {
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: '利用者を入力してください。',
          },
        },
      },
      message: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'メッセージを入力してください。',
          },
        },
      },
    },
    {}
  )

  Board.associate = (models) => {
    Board.belongsTo(models.User)
  }
  return Board
}
