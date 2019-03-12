const sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('Usuario', {
    CI:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    Nombre: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    Apellido: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    Correo: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    Sexo: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    FechaNac: {
        type: sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})

user.sync();
module.exports = user;