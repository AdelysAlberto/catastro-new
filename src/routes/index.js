import express from 'express';
import userRouter from './user.router';
import personRouter from './person.router';

const router = new express.Router();

router.use('/api', userRouter, personRouter);

module.exports = router;
