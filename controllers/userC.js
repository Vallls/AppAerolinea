const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const user = require('../models/user');

const controller = {};

controller.getAllUser = async function (callback) {
    try{
        let response = await user.findAll({
            
        });
        let user = response.map(result => result.dataValues);
        console.log(user);
        callback(user, null);
    }catch (error) {
        callback(null,error);
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
module.exports = controller;