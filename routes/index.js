var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aviones', function(req, res, next) {
  res.render('aviones');
});

router.get('/vuelos', function(req, res, next) {
  res.render('vuelos');
});

const origenDestinoController = require('../controllers/ODController');
router.get('/vuelos', (req,res) => {
  origenDestinoController.getOrigenDestino(data => res.render('vuelos', {origendestino: data}))
});

module.exports=router;