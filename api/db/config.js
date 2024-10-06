const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
    development: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost,
        port: config.dbPort,
        uri: URI,
        dialect: 'mysql'
    },
    production: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost,
        port: config.dbPort,
        uri: URI,
        dialect: 'mysql'
    },
}