const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const tripulacion = require('../models/empleado');

const controller = {};

controller.createEmpleado = async function (data) {
    
    tripulacion.create(data);
};

controller.updateEmpleado = async function (data, callback) {
    try {
        let response = await tripulacion.update( {
            sueldo: data.sueldo,
            cargo: data.cargo,
            UsuarioCI: data.UsuarioCI
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

controller.getEmpleado = async function (callback){
    try{
        db.query(
            "SELECT * FROM `Empleado`"
        ).spread((data,metada) => {
            console.log(data);
            callback(data,null);
        });

    }catch(error){
        callback(error,null);
    }
}

controller.deleteEmpleado = async function (id, callback) {
    try {
        let response = await tripulacion.destroy(
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

controller.findbyCI = async function(data, callback){
    try{
        db.query(
            "SELECT * FROM `Empleado`" +
            "WHERE `Empleado`.`UsuarioCI` ="+data
        ).spread((dato,metada) => {
            console.log(dato);
            callback(dato,[]);
        });

    }catch(error){
        callback(error,[]);
    }
}
module.exports = controller;