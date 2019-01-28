const Sequelize = require('sequelize')

const sequelize = new Sequelize('bdmcbseoqw7wy80lfjf2', 'ucxxsxbvcovovkbc5gr2', 'LbKyARnIWpoDhPoKSf7h', {
  host: 'bdmcbseoqw7wy80lfjf2-mysql.services.clever-cloud.com',
  dialect: 'mysql',
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

  module.exports = sequelize;