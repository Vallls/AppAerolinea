const sequelize = require('sequelize');
const db = require('../config/database');

const asientos = db.define('Asientos', {
    idasiento:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    PC: {
        type: sequelize.TINYINT,
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


asientos.sync();
module.exports = asientos;