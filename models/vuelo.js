const sequelize = require('sequelize');
const db = require('../config/database');
const ruta = require('./rutas');

const vuelo = db.define('Vuelo', {
    idvuelo: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

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
            isNumeric: true
        }
    },

    fechavuelo: {
        type: sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
},{
    timestamps: false,
    freezeTableName: true
})

vuelo.belongsTo(ruta);
vuelo.sync();
module.exports = vuelo;
