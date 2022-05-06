'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      pass: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      mail: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          min: 0,
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
