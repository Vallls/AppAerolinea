const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const user = require('../models/user');

const controller = {};

controller.getAllUser = async function (callback) {
    try{
        db.query(
            "SELECT * FROM `Usuario`"
        ).spread((data,metada) => {
            console.log(data);
            callback(data,null);
        });

    }catch(error){
        callback(error,null);
    }
};

controller.createUser = async function (data) {
    
    console.log(data.CI, data.Nombre, data.Apellido, data.Correo, data.Sexo, data.FechaNac);
    user.create(data);
};

controller.getUser = async function(data,callback){
    try{
       let response = await user.findByPk(data);
       console.log(response)
       let dato = response.dataValues;
       callback(dato,null);
    }catch (error) {
        callback(null,error);
    }     
}

controller.UserAndPhone = async function(callback){
    try{
        db.query(
            "SELECT `Usuario`.`CI`, `Usuario`.`Nombre`, `Usuario`.`Apellido`, `Usuario`.`Sexo`, `Usuario`.`Correo`, `Usuario`.`FechaNac`, `Telefono`.`telefono`, `Telefono`.`id` FROM `Usuario`"+
            "INNER JOIN `Telefono` ON `Usuario`.`CI` = `Telefono`.`UsuarioCI`" +
            "ORDER BY `Usuario`.`CI` ASC"
        ).spread((data,metada) => {
            console.log(data);
            callback(data,null);
        });

    }catch(error){
        callback(error,null);
    } 
}

controller.updateUser = async function (data, callback) {
    try {
        let response = await user.update( {
            Nombre: data.Nombre,
            Apellido: data.Apellido,
            Sexo: data.Sexo,
            Correo: data.Correo,
            FechaNac: data.FechaNac

        },
         {
            where: {
                CI:data.CI
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};

controller.deleteUser = async function (CI, callback) {
    try {
        let response = await user.destroy(
         {
            where: {
                CI
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
};
module.exports = controller;