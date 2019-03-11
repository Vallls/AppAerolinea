const sequelize = require('sequelize');
const db = require('../config/database');
const modelo = require('./modelo');

const avion = db.define('Avion', {
    idavion: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
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
}, {
    timestamps: false,
    freezeTableName: true
})

avion.belongsTo(modelo);
avion.sync();
module.exports = avion;