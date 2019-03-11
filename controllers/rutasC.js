const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const ruta = require('../models/rutas')

const controller = {};

controller.getruta = async function (callback) {
    try{
        let response = await ruta.findAll({
            
        });
        let ruta = response.map(result => result.dataValues);
        console.log(ruta);
        callback(ruta, null);
    }catch (error) {
        callback(null,error);
    }
};

controller.createRutas = async function (data) {
    
    console.log(data.idruta, data.duracion, data.frecuencia, data.horsalidp, data.origenIATA, data.destinoIATA);
    ruta.create(data);
};

module.exports = controller;