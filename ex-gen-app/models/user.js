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
    //
  }
  // class User extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // User.init({
  //   name: DataTypes.STRING,
  //   pass: DataTypes.STRING,
  //   mail: DataTypes.STRING,
  //   age: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'User',
  // });
  return User
}
