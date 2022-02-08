const {Sequelize, DataTypes} = require('sequelize');

const connection = require("../config/connection.js");

const Posts = connection.define('post', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgurl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull:false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Posts;