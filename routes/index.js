var express = require('express');
var router = express.Router();

/* rutas sin metodos */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/boletos', function(req, res, next) {
  res.render('boletos');
});

/* rutas de aeropuerto y rutas */
const aeropuertoC = require('../controllers/aeropuertoC');
const rutasC = require('../controllers/rutasC');
router.get('/rutas', (req,res) => {
  aeropuertoC.getAeropuerto(data => res.render('rutas', {aeropuerto: data}))
});

router.get('/verRutas', (req,res) => {
  rutasC.getRutas(data => res.render('verRutas', {ruta: data}))
});

router.post('/AddRutas', (req,res) => {
  console.log(req.body);
  rutasC.createRutas(req.body)
  res.redirect('rutas');
});

router.post('/UpdateRuta/:id', (req, res) => {
  if (!!req.params.id) {
    rutasC.updateRutas({id: req.params.id, data: req.body}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('rutas');
    });
  }
});

/* rutas de usuario y telefono */
const userC = require('../controllers/userC');
const vueloC = require('../controllers/vueloC');
router.post('/GetUser', (req,res) => {
  let { CI } = req.body;
  userC.getUser(CI, (user, err)=> {
    if(!!err){
      res.render('registroU', null);
      console.log(err);
      throw err;

    }else {
    vueloC.getVuelos(data => res.render('reservarB', {data,user},console.log({data,user})))
    
    }
  })
});

router.get('/reservarB', (req,res)=> {
  vueloC.getVuelos(data => res.render('reservarB', {vuelo: data}))
})

router.post('/ReviewTrip', (req,res) => {
  let { CI } = req.body;
  userC.getUser(CI, (user, err)=> {
    if(!!err){
      res.render('registroU', null);
      console.log(err);
      throw err;

    }else {
      res.render('registroTri', {user})
      console.log({user});
    }
  })
});

const telefonoC = require('../controllers/telefonoC');
router.post('/RegisterUser', (req,res) => {
  userC.createUser({CI: req.body.CI, Nombre: req.body.Nombre, Apellido: req.body.Apellido, Sexo: req.body.Sexo, Correo: req.body.Correo, FechaNac: req.body.FechaNac});
  telefonoC.createTelefono({UsuarioCI: req.body.CI, telefono: req.body.telefonoC});
  telefonoC.createTelefono({UsuarioCI: req.body.CI, telefono: req.body.telefono});
  res.redirect('boletos');
})



module.exports = router;
