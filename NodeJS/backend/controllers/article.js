'use strict'

//Cargamos el validador

var validator = require('validator');
var fs = require('fs');
var path = require('path');
const article = require('../models/article');

//obtenemos nuestro modelo.

var Article = require('../models/article');

var controller = {
    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Victor Robles web',
            url: 'Victor Robles web',
            hola
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    },
    save: (req, res) => {
        //Recoger parametros por post

        var params = req.body;
        console.log(params);

        //Validar datos (validator)

        try {
            var validate_title = !validator.isEmpty(params.title);
            var validator_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validator_content) {

            //Crear el objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el artículo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'El artículo no se guardó'
                    });
                } else {
                    //Devolver una respuesta
                    return res.status(200).send({
                        status: 'success',
                        article: articleStored
                    });
                }
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos'
            });
        }
    },
    getArticles: (req, res) => {
        var last = req.params.last;

        var query = Article.find({});
        if (last || last != undefined) {
            query.limit(5);
        }


        //Find para sacar los datos de la base de datos
        query.sort('-id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver articulos'
                });
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });

    },
    getArticle: (req, res) => {

        //Recoger el id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if (articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!!!'
            });
        }

        //Buscar el articulo 
        Article.findById(articleId, (err, article) => {
            //Devolverlo en json
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay existe el artículo'
                });
            }

            return res.status(404).send({
                status: 'success',
                article
            });
        });

    },
    update: (req, res) => {
        //Recoger el id del articulo por la url

        var articleId = req.params.id;

        //Recoger los datos que llegan por put
        var params = req.body;

        //Validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            });
        }

        if (validate_title && validate_content) {
            Article.findOneAndUpdate({
                _id: articleId
            }, params, {
                new: true
            }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }
                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo!!!'
                    });
                }
            });
        } else {
            return res.status(500).send({
                status: 'error',
                message: 'La validacion no es correcta!!!'
            });
        }

        //Find and Update

    },
    delete: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //Find and delete
        Article.findOneAndDelete({
            _id: articleId
        }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar!!!'
                });
            }
            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Nose ha borrado el articulo, posiblemente n oexista!!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
        return res.status(200).send({
            status: 'error',
            message: 'La validacion no es correcta!!!'
        });
    },
    upload: (req, res) => {
        //Configurar el modulo del connect multiparty se hace en router/article.js

        //Recoger el ficher de la peticion
        var file_name = 'Imagen no subida...';
        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        //Conseguir el nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        //advertencia en linux o mac en vez de poner las dobles barras va una barra normal no invertida.

        //Nombre del archivo

        var file_name = file_split[2];

        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        //Extension del fichero 

        //Comprobar la extensión, solo imágenes
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'gif' && file_ext != 'jpeg') {
            //borrar el archivo subido
            //borra el archivo fisicamente, del disco.
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida'
                });
            });
        } else {
            //Si todo es valido 
            var articleId = req.params.id;
            Article.findOneAndUpdate({
                _id: articleId
            }, {
                image: file_name
            }, {
                new: true
            }, (err, articleUpdated) => {
                if (err) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen de artículo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        }
    }
};

//end controller.

module.exports = controller;