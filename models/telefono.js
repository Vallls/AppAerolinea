const sequelize = require('sequelize');
const db = require('../config/database');
const user = require('./user');

const telefono = db.define('Telefono', {
    telefono: {
        type: sequelize.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
}
}, {
    timestamps: false,
    freezeTableName: true
})

telefono.belongsTo(user);
telefono.sync();
module.exports = telefono;