const sequelize = require('sequelize');
const db = require('../config/database');
const boleto = require('./boleto');
const reserva = require('./reserva');

const resbol = db.define('Resbol', {

}, {
    timestamps: false,
    freezeTableName: true
})


resbol.belongsTo(boleto);
resbol.belongsTo(reserva);
resbol.sync();
module.exports = resbol;