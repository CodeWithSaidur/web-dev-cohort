import { Router } from 'express';
import { registerUser } from '../controllers/auth.controllers.js';
import { validate } from '../middlewares/validator.middleware.js';
import { userRegistrationValidator } from '../validators/index.js';

const router = Router();

router
  .route('/register')
  .post(userRegistrationValidator(), validate, registerUser);

export default router;
