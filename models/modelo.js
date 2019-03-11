const sequelize = require('sequelize');
const db = require('../config/database');

const modelo = db.define('Modelo', {
    idmodelo: {
        type: sequelize.STRING(45),
        allowNull: false,
        primaryKey: true,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },

    fabricante: {
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    VMax:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    VCrucero:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    TCombustible: {
        type: sequelize.STRING(45),
        allowNull: false,
        validate: {
            isAlpha: true,
            notEmpty: true
        }
    },
    CCombustible:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    PesoV:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    PesoMax:{
        type: sequelize.INTEFLOATGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    CargMaxEq:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    CargMaxCab:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    DistDesCM:{
        type: sequelize.FLOAT,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    Banos:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    SalidasE:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    EquiMed:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    Wifi: {
        type: sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    Tele: {
        type: sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    numAsEco:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    numAsPC:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    cantri:{
        type: sequelize.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },

}, {
    timestamps: false,
    freezeTableName: true
})

modelo.sync();
module.exports = modelo;