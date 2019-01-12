const path = require('path')
const Sequelize = require('sequelize')
// const Boom = require('boom')

// configure connection to db host, user, pass - not required for SQLite
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: path.join('./', 'orders.sqlite') // SQLite persists its data directly to file
})

const Account = sequelize.define('account', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
user_id: Sequelize.STRING,
password: Sequelize.STRING
})

const Category = sequelize.define('category', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

const MenuItem = sequelize.define('menu_item', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    category_id: Sequelize.INTEGER,
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    price: Sequelize.DOUBLE
  })

module.exports = {
    Category,
    MenuItem
}