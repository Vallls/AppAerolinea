const Sequelize = require('sequelize');
Sequelize.Promise = global.Promise;
const db = require('../config/database');
const tripulacion = require('../models/tripulacion');

const controller = {};