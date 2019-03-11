const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('./user');

const pasajero = db.define('Pasajero', {
    pasaporte: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})

pasajero.belongsTo(user);
pasajero.sync();
module.exports = pasajero;