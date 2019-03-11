const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const Aeropuerto = require('../models/aeropuerto');

const controller = {};

controller.getAeropuerto = async function (callback) {
    try{
        let response = await Aeropuerto.findAll({
            
        });
        let aeropuerto = response.map(result => result.dataValues);
        console.log(aeropuerto);
        callback(aeropuerto, null);
    }catch (error) {
        callback(null,error);
    }
};

module.exports = controller;