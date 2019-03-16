const sequelize = require('sequelize');
const db = require('../config/database');
const ruta = require('./rutas');
const avion = require('./avion');

const vuelo = db.define('Vuelo', {
    bolenven: {
        type: sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    estado: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 'Asignado',
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    horsalreal: {
        type: sequelize.TIME,
        allowNull: true,
        validate: {
            notEmpty: true,
        }
    },

    fechavuelo: {
        type: sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
},{
    timestamps: false,
    freezeTableName: true
})

vuelo.belongsTo(ruta);
vuelo.belongsTo(avion);
vuelo.sync();
module.exports = vuelo;
