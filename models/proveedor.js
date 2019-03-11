const sequelize = require('sequelize');
const db = require('../config/database');

const proveedor = db.define('Proovedor',{
    idproveedor: {
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            isNumeric: true,
            notEmpty: true
        }
    },

    proovedor:{
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },

    tiempores:  {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
})

proveedor.sync();
module.exports = proveedor;