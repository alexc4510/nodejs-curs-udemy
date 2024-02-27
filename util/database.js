const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Alex10062003!', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
