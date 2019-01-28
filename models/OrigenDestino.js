const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = (sequelize, Sequelize) => {
const OrigenDestino = db.define('OrigenDestino', {
    IDVuelo: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Origen: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Destino: {
        type: sequelize.STRING,
        allowNull: false,

        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    Precio: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    EE: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    EPC: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    PME: {
        type: sequelize.INTEGER,
        allowNull: false,

        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },
    Duracion: {
        type: sequelize.TIME,
        allowNull: false,

        validate: {
            notEmpty: true
        }
    }

}, {
    timestamps: false,
    freezeTableName: true
});
    return OrigenDestino;
}