const { Sequelize } = require('sequelize');

const URI = process.env.URI;

module.exports = new Sequelize(URI)