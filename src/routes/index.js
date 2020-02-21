import express from 'express';
import userRouter from './user.router';

const router = new express.Router();

router.use('/api', userRouter);

module.exports = router;
