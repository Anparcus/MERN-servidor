const express = require('express');
const conectarDB = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar express.json
app.use(express.json({ extended: true }));

//Puerto de la App
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));

//Arrancar la App
app.listen(PORT, () => {
   console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
