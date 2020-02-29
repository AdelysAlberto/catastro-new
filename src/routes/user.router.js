import express from 'express';

const { UserController, TopografiaController } = require('../controllers');

const router = new express.Router();

router.get('/user/:id?', UserController.getUser);
router.get('/topografia/:id?', TopografiaController.get.bind(TopografiaController));
router.post('/user', UserController.createUser);

module.exports = router;
