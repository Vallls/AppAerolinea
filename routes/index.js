var express = require('express');
var router = express.Router();

/* Ruta index */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* rutas boletos */
router.get('/boletos', function(req, res, next) {
  res.render('boletos');
});
/* rutas tripulacion */
router.get('/tripulacion', function(req, res, next) {
  res.render('tripulacion');
});


const aeropuertoC = require('../controllers/aeropuertoC');
const rutasC = require('../controllers/rutasC');

/* Mostrar los IATA al registrar rutas */
router.get('/rutas', (req,res) => {
  aeropuertoC.getAeropuerto(data => res.render('rutas', {aeropuerto: data}))
});

/* ruta Rutas */
router.get('/verRutas', (req,res) => {
  rutasC.getRutas(data => res.render('verRutas', {ruta: data}))
});

/* agregar Rutas */
router.post('/AddRutas', (req,res) => {
  console.log(req.body);
  rutasC.createRutas(req.body)
  res.redirect('rutas');
});

/* Updatear Rutas */
router.post('/UpdateRuta/:idruta', (req, res) => {
  if (!!req.params.idruta) {
    rutasC.updateRutas({idruta: req.params.idruta, duracion: req.body.duracion, frecuencia: req.body.frecuencia, horsalidp:req.body.horsalidp, origenIATA: req.body.origenIATA, destinoIATA: req.body.destinoIATA}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verRutas');
    });
  }
});

/* Eliminar Rutas */
router.post('/DelateRuta/:idruta', (req, res) => {
  if (!!req.params.idruta) {
    rutasC.deleteRutas(req.params.idruta, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verRutas');
    });
  }
})

const userC = require('../controllers/userC');
const vueloC = require('../controllers/vueloC');

/* Reservar Boleto: si no estas registrado como usuario te lleva a registrarte, de lo contrario te lleva a Reservar Boleto */
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

/* Registrar Empleado: si no esta registrado como usuario te lleva a registrarte, de lo contrario comprueba si estas registrado como empleado, si lo estas te lleva a la vista de gestion de empleado, sino te lleva a registrarte */
router.post('/ReviewTrip', (req,res) => {
  let { CI } = req.body;
  userC.getUser(CI, (user, err)=> {
    if(!!err){
      res.render('registroU', null);
      console.log(err);
      throw err;

    }else {
      empleadoC.findbyCI(CI, (dato, err) => {
        if(!!err){
          res.render('registroTri', {user});
          console.log(err);
          throw err;
    
        }else {
          empleadoC.getEmpleado(data => res.render('verEmpleado', {empleado: data}))
        }
      })
      console.log({user});
    }
  })
});

const telefonoC = require('../controllers/telefonoC');

/* Registrar usuario y sus telefonos */
router.post('/RegisterUser', (req,res) => {
  userC.createUser({CI: req.body.CI, Nombre: req.body.Nombre, Apellido: req.body.Apellido, Sexo: req.body.Sexo, Correo: req.body.Correo, FechaNac: req.body.FechaNac});
  if(req.body.telefonoC != null){
    telefonoC.createTelefono({UsuarioCI: req.body.CI, telefono: req.body.telefonoC});
  }
  if(req.body.telefono !=null){
    telefonoC.createTelefono({UsuarioCI: req.body.CI, telefono: req.body.telefono});
  }
  res.redirect('boletos');
})

/* ruta Pistas */
const pistaC = require('../controllers/pistaC');
router.get('/pistas', (req,res) => {
  pistaC.getPista(data => res.render('pistas', {pista: data}))
});

/* Agregar Pistas */
router.post('/AddPista', (req,res) => {
  console.log(req.body);
  pistaC.createPista(req.body)
  res.redirect('pistas');
});

/* Updatear Pistas */
router.post('/UpdatePista/:id', (req, res) => {
  if (!!req.params.id) {
    pistaC.updatePista({id: req.params.id, idpista: req.body.idpista, distancia: req.body.distancia, disponibilidad: req.body.disponibilidad, AeropuertoIATA: req.body.AeropuertoIATA}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/pistas');
    });
  }
});

/* Eliminar Pistas */
router.post('/DelatePista/:id', (req, res) => {
  if (!!req.params.id) {
    pistaC.deletePista(req.params.id, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/pistas');
    });
  }
})

/* Ruta Empleados */
const empleadoC = require('../controllers/tripulacionC');
router.get('/verEmpleado', (req,res) => {
  empleadoC.getEmpleado(data => res.render('verEmpleado', {empleado: data}))
});

/* Agregar Empleados */
router.post('/AddEmpleado', (req,res) => {
  console.log(req.body);
  empleadoC.createEmpleado(req.body)
  res.redirect('tripulacion');
});

/* Updatear Empleados */
router.post('/UpdateEmpleado/:id', (req, res) => {
  if (!!req.params.id) {
    empleadoC.updateEmpleado({id: req.params.id, cargo: req.body.cargo, sueldo: req.body.sueldo, UsuarioCI: req.body.UsuarioCI}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verEmpleado');
    });
  }
});

/* Eliminar Empleados */
router.post('/DelateEmpleado/:id', (req, res) => {
  if (!!req.params.id) {
    empleadoC.deleteEmpleado(req.params.id, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verEmpleado');
    });
  }
})

/* Ruta Usuarios */
router.get('/verUsuarios', (req,res) => {
  userC.getAllUser((user,err) => {
    if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        telefonoC.getTelefono(telefono => res.render('verUsuarios',{user,telefono}, console.log({user,telefono})))
  })
});

/* Updatear Usuarios */
router.post('/UpdateUser/:CI', (req, res) => {
  if (!!req.params.CI) {
    userC.updateUser({CI: req.params.CI, Nombre: req.body.Nombre, Apellido: req.body.Apellido, Sexo: req.body.Sexo, Correo: req.body.Correo, FechaNac: req.body.FechaNac}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verUsuarios');
    });
  }
});

/* Eliminar Usuarios */
router.post('/DelateUser/:CI', (req, res) => {
  if (!!req.params.CI) {
    userC.deleteUser(req.params.CI, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
      res.redirect('/verUsuarios');
    });
  }
})   
   

/* Eliminar Telefono */
router.post('/DelateTelefono/:id', (req, res) => {
  if (!!req.params.id) {
    telefonoC.deleteTelefono(req.params.id, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verUsuarios');
    });
  }
})

/* Updatear Telefono */
router.post('/UpdateTelefono/:id', (req, res) => {
  if (!!req.params.id) {
    telefonoC.updateTelefono({id: req.params.id, telefono: req.body.telefono, UsuarioCI: req.body.UsuarioCI}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verUsuarios');
    });
  }
});

const avionC = require('../controllers/avionC');
router.get('/itinerario', (req,res) => {
avionC.getAvionesDisponibles((aviones,err)=> {
  if (err)
    res.json({
      success: false,
      msg: 'Failed to update product'
    });
  else
    rutasC.getRutas(rutas => res.render('itinerario',{aviones,rutas}, console.log({aviones,rutas})))
})
})

router.post('/AddVuelos', (req,res) => {
  console.log(req.body);
  vueloC.AddVuelos(req.body)
  res.redirect('itinerario');
});

const boletoC = require('../controllers/boletoC');
router.post('/AddBoleto',(req,res) => {
  console.log(req.body);
  boletoC.createBoleto(req.body)
  res.redirect('boletos');
} )

module.exports = router;
