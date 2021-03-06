'use strict'

//Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//cargar ficheros rutas
var article_routes = require('./routes/article');

//Middlewares que se van a ejecutar antes de las rutas, procesar
//un dato antes de ejcutar la ruta
// cargamos el body parser.

app.use(bodyParser.urlencoded({
    extended: false
}));
//convertimos cualquier peticion que nos llegue a un json.
app.use(bodyParser.json());

//CORS, para permitir peticiones desde el frontend.
//Permitir las llamadas desde el frontend dependiendo cual sea, para que no
//se bloquee.
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prefijos a rutas.
app.use('/api', article_routes);

//Exportar modulo, el fichero actual, para poder cargar el app en el index.
//permite usar este objeto fuera de este fichero
module.exports = app;