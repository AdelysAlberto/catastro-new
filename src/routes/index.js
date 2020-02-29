import express from 'express';
import documento from './documento.router';
import personRouter from './person.router';
import userRouter from './user.router';
import utilsRouter from './utils.router';

const router = new express.Router();

router.use('/api', userRouter, personRouter, utilsRouter, documento);

module.exports = router;
