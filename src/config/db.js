
// BASE DE DATOS MYSQL CONFIGURACION - instalacion: npm i mysql2
// const mysql = require('mysql2');

// let conectarDB = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// conectarDB.connect((err) => {
//     if(err) {
//         console.log('Error en la conexion: ', err.stack);
//         return
//     }
//     console.log('Conectado a la Base de Datos MYSQL!');
// })

// module.exports = conectarDB;


// BASE DE DATOS MONGODB CONFIGURACION - instalacion: npm i mongoose
// const mongoose = require('mongoose');

// const conectarDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB_MONGO);
//         console.log('Conectado a la Base de Datos MONGODB!');
//     } catch (error) {
//         console.log(error);
//         process.exit(1); // Detener la app 
//     }
// }

// module.exports = conectarDB;