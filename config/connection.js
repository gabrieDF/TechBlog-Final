const Sequelize = require('sequelize');

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: 'techBlog2.sqlite'
});

module.exports = connection;