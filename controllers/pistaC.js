const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const pista = require('../models/pistas')

const controller = {};

controller.createPista = async function (data) {
    
    pista.create(data);
};

controller.updatePista = async function (data, callback) {
    try {
        let response = await pista.update( {
            idpista: data.idpista,
            distancia: data.distancia,
            disponibilidad: data.disponibilidad,
            AeropuertoIATA: data.AeropuertoIATA
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

controller.getPista = async function (callback){
    try{
        db.query(
            "SELECT * FROM `Pistas`"
        ).spread((data,metada) => {
            console.log(data);
            callback(data,null);
        });

    }catch(error){
        callback(error,null);
    }
}

controller.deletePista = async function (id, callback) {
    try {
        let response = await pista.destroy(
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
module.exports = controller;