import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

/**
 * @openapi
 * '/api/auth/signin':
 *  post:
 *    tags:
 *    - User
 *    summary: Sign in a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                default: Pavlo Syzonenko
 *              email:
 *                type: string
 *                default: sls.shortlinker@gmail.com
 *              password:
 *                type: string
 *                default: 123123
 *              role:
 *                type: string
 *                default: admin
 *    responses:
 *      201:
 *        description: Created
 *      500:
 *        description: Register error
 */
router.post('/auth/signin', authController.signIn);

/**
 * @openapi
 * '/api/auth/login':
 *  post:
 *    tags:
 *    - User
 *    summary: Log in a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                default: sls.shortlinker@gmail.com
 *              password:
 *                type: string
 *                default: 123123
 *    responses:
 *      200:
 *        description: OK
 *      500:
 *        description: Login error
 */
router.post('/auth/login', authController.logIn);

export default router;
