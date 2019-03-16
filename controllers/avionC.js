const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const avion = require('../models/avion');

const controller = {};


controller.getAvionesDisponibles = function(callback){
    try{
      db.query(
        "SELECT `Avion`.`idavion`, `Avion`.`estado`, `Avion`.`ModeloIdmodelo`, `Modelo`.`numAsEco`, `Modelo`.`numAsPC`" + 
        "FROM `Avion`" +
        "INNER JOIN `Modelo` ON `Avion`.`ModeloIdmodelo` = `Modelo`.`idmodelo` AND `Avion`.`estado` = 'Disponible'"
    ).spread((aviones,metada) => {
        console.log(aviones);
        callback(aviones,null) 
    });
    }catch(error){
      callback(error,null)
    }      
}




module.exports = controller;