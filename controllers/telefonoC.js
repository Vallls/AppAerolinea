const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const telefono = require('../models/telefono');

const controller = {};

controller.getTelefono = async function (callback) {
    try{
        let response = await telefono.findAll({
            
        });
        let telefonos = response.map(result => result.dataValues);
        console.log(telefonos);
        callback(telefonos, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createTelefono = async function (data) {
    
    console.log(data.telefono);
    telefono.create(data);
};

controller.updateTelefono = async function (data, callback) {
    try {
        let response = await telefono.update( {
            telefono: data.telefono,
            UsuarioCI: data.UsuarioCI,

        },
         {
            where: {
                id:data.id
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.deleteTelefono = async function (id, callback) {
    try {
        let response = await telefono.destroy(
         {
            where: {
                id
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};0

module.exports = controller;