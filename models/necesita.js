const sequelize = require('sequelize');
const db = require('../config/database');
const mantenimiento = require('./mantenimiento');
const avion = require('./avion');

const necesita = db.define('Necesita', {
    fechaentrada: {
        type: sequelize.DATEONLY,
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

necesita.belongsTo(mantenimiento);
necesita.belongsTo(avion);
necesita.sync();
module.exports = necesita;
