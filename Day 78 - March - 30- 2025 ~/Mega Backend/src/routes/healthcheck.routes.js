import express from 'express';
//Import all controllers from controllers
import { healthCheck } from '../controllers/healthcheck.controller.js';
const router = express.Router();

router.get('/save', healthCheck);

export default router;
