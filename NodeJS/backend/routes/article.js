'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});


router.get('/test-de-controlador', ArticleController.test);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);
router.post('/datos-curso', ArticleController.datosCurso);
router.post('/save', ArticleController.save);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
//Decimos cual va a ser el middleware que va a procesar los archivos.
router.post('/upload-image/:id', md_upload, ArticleController.upload   );

//Rutas útiles


module.exports = router;