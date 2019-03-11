const sequelize = require('sequelize');
const db = require('../config/database');

const Aeropuerto = db.define('Aeropuerto',{
    IATA: {
        type: sequelize.STRING(4),
        allowNull: false,
        primaryKey: true,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    Ciudad: {
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    Pais: {
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Aeropuerto.sync();
module.exports = Aeropuerto;