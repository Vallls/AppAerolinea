const sequelize = require('sequelize');
const db = require('../config/database');
const asiento = require('./asientos');
const vuelo = require('./vuelo');
const boleto = require('./boleto');
const tarifa = require('./tarifa');
const pasajes = db.define('Pasajes', {

}, {
    timestamps: false,
    freezeTableName: true
})

pasajes.belongsTo(asiento);
pasajes.belongsTo(vuelo);
pasajes.belongsTo(boleto);
pasajes.belongsTo(tarifa);
pasajes.sync();
module.exports = pasajes;
