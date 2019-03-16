const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const ruta = require('../models/rutas')

const controller = {};

controller.createRutas = async function (data) {
    
    console.log(data.idruta, data.duracion, data.frecuencia, data.horsalidp, data.origenIATA, data.destinoIATA);
    ruta.create(data);
};

controller.updateRutas = async function (data, callback) {
    try {
        let response = await ruta.update( {
            duracion: data.duracion,
            frecuencia: data.frecuencia,
            horsalidp: data.horsalidp,
            origenIATA: data.origenIATA,
            destinoIATA: data.destinoIATA
        },
         {
            where: {
                idruta:data.idruta
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.getRutas = async function (callback){
    try{
        db.query(
            "SELECT * FROM `Rutas`"+
            "ORDER BY `Rutas`.horsalidp ASC"
        ).spread((data,metada) => {
            console.log(data);
            callback(data,null);
        });

    }catch(error){
        callback(error,null);
    }
}

controller.deleteRutas = async function (idruta, callback) {
    try {
        let response = await ruta.destroy(
         {
            where: {
                idruta
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};
module.exports = controller;