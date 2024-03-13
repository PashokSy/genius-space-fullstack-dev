import express from 'express';

import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

/**
 * @openapi
 * '/api/task':
 *  post:
 *    tags:
 *    - Task
 *    summary: Create a task
 *    security:
 *      - basicAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                default: Buy a book
 *    responses:
 *      201:
 *        description: Created
 *      400:
 *        description: Bad Request
 * */
router.post('/task', taskController.createTask);

/**
 * @openapi
 * '/api/task':
 *  get:
 *    tags:
 *    - Task
 *    summary: Get all user tasks
 *    security:
 *      - basicAuth: []
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                  description:
 *                    type: string
 *                  completed:
 *                    type: boolean
 *                  createdBy:
 *                    type: string
 *      400:
 *        description: Bad Request
 * */
router.get('/task', taskController.getTasksByUserId);

/**
 * @openapi
 * '/api/task/all':
 *  get:
 *    tags:
 *    - Task
 *    summary: Get all tasks
 *    security:
 *      - basicAuth: []
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                  description:
 *                    type: string
 *                  completed:
 *                    type: boolean
 *                  createdBy:
 *                    type: string
 *      400:
 *        description: Bad Request
 * */
router.get('/task/all', checkAdmin, taskController.getAllTasks);

/**
 * @openapi
 * '/api/task/{id}':
 *  get:
 *    tags:
 *    - Task
 *    summary: Get task by id
 *    security:
 *      - basicAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: string id of task in mongodb
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 * */
router.get('/task/:id', taskController.getTask);

/**
 * @openapi
 * '/api/task/{id}':
 *  put:
 *    tags:
 *    - Task
 *    summary: Update task by id
 *    security:
 *      - basicAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: string id of task in mongodb
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 * */
router.put('/task/:id', taskController.updateTask);

/**
 * @openapi
 * '/api/task/{id}':
 *  delete:
 *    tags:
 *    - Task
 *    summary: Delete task by id
 *    security:
 *      - basicAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: string id of task in mongodb
 *    responses:
 *      200:
 *        description: OK
 *      400:
 *        description: Bad Request
 * */
router.delete('/task/:id', taskController.deleteTask);

export default router;
