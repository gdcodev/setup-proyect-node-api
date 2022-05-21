const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

// Crear el servidor
const app = express();

// Habilitamos cors
app.use(cors());

// Importamos las Rutas
const usuarioRoutes = require('./routes/usuarios');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// Definimos las Rutas
app.use('/api/usuarios', usuarioRoutes);

module.exports = app;