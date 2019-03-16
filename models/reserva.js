const sequelize = require('sequelize');
const db = require('../config/database');

const reserva = db.define('Reserva', {

    

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