require('dotenv').config();
const app = require('./app');
// const conectarDB = require('./config/db');

// Conexion a la base de datos
// conectarDB();

// Puerto de la aplicacion
const PORT = process.env.PORT || 4001;

// Arrancamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto -> http://localhost:${PORT}`);
})