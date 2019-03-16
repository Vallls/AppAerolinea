const sequelize = require('sequelize');
const db = require('../config/database');
const vuelo = require('../models/vuelo');
const user = require('../models/user');

const boleto = db.define('Boleto', {

    estado:  {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 'Reservado',
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    equiextra: {
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

    fechares:{
        type: sequelize.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.NOW,
        validate: {
            notEmpty: true,
        }
    },
}, {
    timestamps: false,
    freezeTableName: true
})

boleto.belongsTo(user);
boleto.belongsTo(vuelo);
boleto.sync();
module.exports = boleto;