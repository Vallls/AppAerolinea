const sequelize = require('sequelize');
const db = require('../config/database');

const tarifa = db.define('Tarifa', {
    idtarifa: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    condicion: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    monto: {
        type: sequelize.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})

tarifa.sync();
module.exports = tarifa;