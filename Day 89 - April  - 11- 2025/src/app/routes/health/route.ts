import express from 'express';
import type { Application, Router } from 'express';

export function register(): Router {
  const router = express.Router();

  // Example route
  router.get('/', (req, res) => {
    res.send('API is working!');
  });

  return router;
}
