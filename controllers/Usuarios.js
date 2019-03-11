const db = require('../config/database');

const user = {};

user.getUser = async function (data) {
    return db.query("SELECT `CI`.`Usuario`, `Apellido`.`Usuario`, `Nombre`.`Usuario` FROM Usuario" + "WHERE `CI`.`Usuario` = '" + data + "'")
}

module.exports = user;
