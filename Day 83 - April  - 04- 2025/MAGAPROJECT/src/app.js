import express from 'express';

const app = express();

// router imports
import { healthCheckRoutes } from './routes/healthCheck.routes.js';

app.use('/api/v1/healthpeak', healthCheckRoutes);

export default app;
