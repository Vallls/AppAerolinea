var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aviones', function(req, res, next) {
  res.render('aviones');
});


module.exports = router;
