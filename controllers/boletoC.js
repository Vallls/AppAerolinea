const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const boleto = require('../models/boleto')

const controller = {};

controller.createBoleto = async function (data) {
    
    console.log(data.id, data.estado, data.equiextra, data.fechares, data.UsuarioCI, data.VueloId);
    boleto.create(data);
};

module.exports = controller;