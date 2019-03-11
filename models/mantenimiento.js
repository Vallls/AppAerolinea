const sequelize = require('sequelize');
const db = require('../config/database');

const mantenimiento = db.define('Mantenimiento',{
    idmante:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    tipo: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    frecuencia: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    diasinh: {
        type: sequelize.INTEGER,
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

mantenimiento.sync();
module.exports = mantenimiento;