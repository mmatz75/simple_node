'use strict'
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Markdata = sequelize.define(
    'Markdata',
    {
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: '利用者を入力してください。',
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'タイトルを入力してください。',
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            msg: 'コンテンツを入力してください。',
          },
        },
      },
    },
    {}
  )

  Markdata.associate = (models) => {
    Markdata.belongsTo(models.User)
  }
  return Markdata
}
