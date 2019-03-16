const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('./user');

const empleado = db.define('Empleado', {
    sueldo: {
        type: sequelize.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    cargo: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
})

empleado.belongsTo(user);
empleado.sync();
module.exports = empleado;