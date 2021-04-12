const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

//Crea un proyectos
//api/proyectos
router.post('/', proyectoController.crearProyecto);

module.exports = router;