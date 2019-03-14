const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const vuelo = require('../models/vuelo');

const controller = {};


controller.getVuelos = function(callback){
        var x;
        db.query(
            "SELECT `Rutas`.`idruta`, ' ',`Rutas`.`origenIATA`, ' ',`Rutas`.`destinoIATA`, ' ',`Rutas`.`horsalidp`, ' ',`Vuelo`.`fechavuelo`" + 
            "FROM `Rutas`" +
            "INNER JOIN `Vuelo` ON `Rutas`.`idruta` = `Vuelo`.`RutaIdruta`"
        ).spread((data,metada) => {
            x = data;
            console.log(x);  
        });
        if (x) {
          callback(x, null);
        } else {
          callback(null, new Error('Uppps... Hemos tenido error en nuestra Base de datos'));
        }
        callback(x,null);
}


module.exports = controller;