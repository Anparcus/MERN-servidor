const Usuario = require('../models/Usuario');


exports.crearUsuario = async (req, res) => {

   try {
      let usuario;

      //crear el nuevo usuario
      usuario = new Usuario(req.body);

      //guardar el nuevo usuario
      usuario = new
   } catch (error) {
      console.log(error);
      res.status(400).send('Hubo un error');
   }
}