const Umzug = require('umzug');
const sequelize = require('./db');
const path = require('path');

const migrate = new Umzug({
    migrations: {
        path: path.join(__dirname, 'migrations'),
        pattern: /\.js$/,
        params: [sequelize.getQueryInterface()]
    }
}); 

const seed = new Umzug({
    migrations: {
        path: path.join(__dirname, 'seeders'),
        pattern: /\.js$/,
        params: [sequelize.getQueryInterface()]
    }
});

module.exports = {migrate, seed}