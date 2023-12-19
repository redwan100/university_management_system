import express from 'express';
import validateRequest from '../../middleware/valideteRequest';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.loginValidation),
  authController.loginUser,
);

export const authRoutes = router;
