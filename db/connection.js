const Sequelize = require('sequelize')

// conexão com o banco
const sequelize = new Sequelize({
    dialect: 'sqlite', // qual banco
    storage: './db/app.db' // onde está o banco
})

// exportar
module.exports = sequelize