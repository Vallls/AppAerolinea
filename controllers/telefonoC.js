const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const telefono = require('../models/telefono');

const controller = {};

controller.getTelefono = async function (callback) {
    try{
        let response = await telefono.findAll({
            
        });
        let telefono = response.map(result => result.dataValues);
        console.log(user);
        callback(user, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createTelefono = async function (data) {
    
    console.log(data.telefono);
    telefono.create(data);
};

module.exports = controller;