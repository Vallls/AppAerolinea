var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aviones', function(req, res, next) {
  res.render('aviones');
});

const origenDestinoController = require('../controllers/ODController');
router.get('/vuelos', (req,res) => {
  origenDestinoController.getOrigenDestino(data => res.render('vuelos', {origendestino: data}))
});

router.post('/Vuelos', (req,res) => {
  console.log(req.body);
  origenDestinoController.createOrigenDestino(req.body)
  res.redirect('/vuelos');
});


module.exports=router;