const sequelize = require('sequelize');
const db = require('../config/database');

const reserva = db.define('Reserva', {
    idreserva:  {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    fechares:{
        type: sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    fechacompra: {
        type: sequelize.DATEONLY,
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

reserva.sync();
module.exports = reserva;