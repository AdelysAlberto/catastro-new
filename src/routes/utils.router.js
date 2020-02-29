import express from 'express';

const { TopografiaController } = require('../controllers');
const { FormaController } = require('../controllers');
const { OperacionController } = require('../controllers');
const { RoleController } = require('../controllers');
const { StatusController } = require('../controllers');
const { TenenciaController } = require('../controllers');
const { TipoUsoController } = require('../controllers');

const router = new express.Router();

router.get('/topografia/:id?', TopografiaController.get.bind(TopografiaController));
router.get('/formas/:id?', FormaController.get.bind(FormaController));
router.get('/operaciones/:id?', OperacionController.get.bind(OperacionController));
router.get('/roles/:id?', RoleController.get.bind(RoleController));
router.get('/status/:id?', StatusController.get.bind(StatusController));
router.get('/tenencia/:id?', TenenciaController.get.bind(TenenciaController));
router.get('/tipo-uso/:id?', TipoUsoController.get.bind(TipoUsoController));

module.exports = router;
