//Import all controllers from controllers
import express from 'express';
import { saveTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/todos', saveTodo);

export default router;
