const sequelize = require('sequelize');
const db = require('../config/database');
const aeropuerto = require('./aeropuerto');

const pistas = db.define('Pistas', {
    idpista: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    distancia:  {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    disponibilidad: {
        type: sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
})

pistas.belongsTo(aeropuerto);
pistas.sync();
module.exports = pistas;
