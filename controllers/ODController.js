const sequelize = require('sequelize');
const db = require('../config/db');
const OrigenDestino = require('../models/OrigenDestino');

const controller = {};

controller.getOrigenDestino = async function (callback) {
    try{
        let response = await OrigenDestino.findAll({
            
        });
        let origendestino = response.map(result => result.dataValues);
        console.log(origendestino);
        console.log("hola");
        callback(origendestino, null);
    }catch (error) {
        callback(null,error);
    }
}