const Sequelize = require('sequelize');
const connection = require('./database');

const Jogos = connection.define('jogos', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },year:{
        type: Sequelize.INTEGER,
        allowNull: false
    },price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Jogos.sync({force:false}).then(() => {});

module.exports = Jogos
