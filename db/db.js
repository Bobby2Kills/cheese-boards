const { Sequelize } = require("sequelize")
const path = require('path')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.NODE_ENV === "test" ? ":memory:" :path.join(__dirname, 'db.sqlite'),
    logging: false
})


module.exports = db