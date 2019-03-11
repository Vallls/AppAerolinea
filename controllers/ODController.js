const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const OrigenDestino = require('../models/OrigenDestino');

const controller = {};

controller.getOrigenDestino = async function (callback) {
    try{
        let response = await OrigenDestino.findAll({
            
        });
        let origendestino = response.map(result => result.dataValues);
        console.log(origendestino);
        callback(origendestino, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createOrigenDestino = async function (data) {
    
        console.log(data.IDVuelo, data.Origen, data.Destino, data.Precio, data.EE, data.EPC, data.PME, data.Duracion);
        OrigenDestino.create(data);
};

controller.deleteOrigenDestino = async function (id, callback) {
    try {
        let response = await OrigenDestino.destroy(
         {
            where: {
                id
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.updateOrigenDestino = async function (data, callback) {
    try {
        let response = await OrigenDestino.update( {
            Precio:data.Precio
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
}

module.exports = controller;