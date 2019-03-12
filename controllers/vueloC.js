const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const vuelo = require('../models/vuelo');

const controller = {};

controller.getVuelos = async function(){
    try{
        let response = await db.query(
            "SELEC CONCAT(`Rutas`.`idruta`, ' ',`Rutas`.`origenIATA`, ' ',`Rutas`.`destinoIATA`, ' ',`Rutas`.`horsalidp`, ' ',`Vuelo`.`fechavuelo`) AS `Datos`" + 
            "FROM `Vuelo`" +
            "INNER JOIN `Rutas` ON `Vuelo`.`Rutasidruta` = `Rutas`.`idruta`"
        )
        let vuelo = response.map(result => result.dataValues);
        console.log(result)
    callback(user, null);
    }catch (error) {
        callback(null,error);
    }
}


module.exports = controller;