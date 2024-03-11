import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/auth/signin', authController.signIn);
router.post('/auth/login', authController.signIn);

export default router;
