const sequelize = require('sequelize');
const db = require('../config/database');

const boleto = db.define('Boleto', {
    idboleto: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    estado:  {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    equiextra: {
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})

boleto.sync();
module.exports = boleto;