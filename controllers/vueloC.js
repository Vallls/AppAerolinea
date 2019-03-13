const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const vuelo = require('../models/vuelo');

const controller = {};

controller.getVuelos = function(callback){
    
        db.query(
            "SELECT CONCAT(`Rutas`.`idruta`, ' ',`Rutas`.`origenIATA`, ' ',`Rutas`.`destinoIATA`, ' ',`Rutas`.`horsalidp`, ' ',`Vuelo`.`fechavuelo`) AS `Datos`" + 
            "FROM `Rutas`" +
            "INNER JOIN `Vuelo` ON `Rutas`.`idruta` = `Vuelo`.`RutaIdruta`"
        ).spread((data,metada) => {
            if (data) {
                callback(data, null);
              } else {
                callback(null, new Error('Uppps... Hemos tenido error en nuestra Base de datos'));
              }
        });
}


module.exports = controller;