const sequelize = require('sequelize');
const db = require('../config/database');
const aeropuerto = require('./aeropuerto');

const ruta = db.define('Rutas', {
    idruta: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    duracion: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    frecuencia: {
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    horsalidp: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

}, {
    timestamps: false,
    freezeTableName: true
})

ruta.belongsTo(aeropuerto, {as: 'origen'});
ruta.belongsTo(aeropuerto, {as: 'destino'});
ruta.sync();
module.exports = ruta;
