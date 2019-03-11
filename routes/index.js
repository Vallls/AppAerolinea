var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const aeropuertoC = require('../controllers/aeropuertoC');
const rutasC = require('../controllers/rutasC');
const userC = require('../controllers/userC');

router.get('/rutas', (req,res) => {
  aeropuertoC.getAeropuerto(data => res.render('rutas', {aeropuerto: data}))
});

router.post('/AddRutas', (req,res) => {
  console.log(req.body);
  rutasC.createRutas(req.body)
  res.redirect('rutas');
});

router.get('/boletos', function(req, res, next) {
  res.render('boletos');
});

router.post('/GetUser', (req,res) => {
  let { CI } = req.body;
  userC.getUser(CI, (user, err)=> {
    if(!!err){
      res.render('registroU', null);
      console.log(err);
      throw err;

    }else {
      res.render('reservarB', {user});
      console.log({user});
    }
  })
});

module.exports = router;
