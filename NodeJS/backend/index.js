'use strict'

//Cargamos mongoose
var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;
//Vamos a configurar el Promise en mongoose 
mongoose.Promise = global.Promise;
//conectamos mongoose
mongoose.connect('mongodb://localhost:27017/api_rest_blog', {
    useNewUrlParser: true
}).then(() => {
    //Hacemos un callback para cuando se conecte.
    console.log('connection succesfull');

    //crear servidor y ponernos a escuchar peticiones HTTP.
    app.listen(port, () => {
        console.log('server is been created' +port);
    });
});