import express from 'express';

const { DatosConstruccionController } = require('../controllers');
const { ComplementoController } = require('../controllers');


const router = new express.Router();

router.get('/datos-construccion/:id?', DatosConstruccionController.get.bind(DatosConstruccionController));
router.get('/complemento/:id?', ComplementoController.get.bind(ComplementoController));


module.exports = router;
