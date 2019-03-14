const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const vuelo = require('../models/vuelo');

const controller = {};


controller.getVuelos = function(callback){
    try{
      db.query(
        "SELECT `Vuelo`.`idvuelo`, `Rutas`.`idruta`, `Rutas`.`origenIATA`, `Rutas`.`destinoIATA`, `Rutas`.`horsalidp`, `Vuelo`.`fechavuelo`" + 
        "FROM `Rutas`" +
        "INNER JOIN `Vuelo` ON `Rutas`.`idruta` = `Vuelo`.`RutaIdruta`"
    ).spread((vuelo,metada) => {
        console.log(vuelo);
        callback(vuelo,null) 
    });
    }catch(error){
      callback(error,null)
    }      
}


module.exports = controller;