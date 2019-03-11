const sequelize = require('sequelize');
const db = require('../config/database');
const proveedor = require('./proveedor');
const avion = require('./avion');

const alquilado = db.define('Alquilado',{
    precioxdis: {
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

alquilado.belongsTo(proveedor);
alquilado.belongsTo(avion);
alquilado.sync();
module.exports = alquilado;