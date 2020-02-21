import express from 'express';
import { UserController } from '../controllers';

const router = new express.Router();

router.get('/user', UserController.getUser);
router.post('/user', UserController.createUser);

module.exports = router;
