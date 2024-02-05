import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { USER_ROLE } from '../user/userConstant';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidation.loginValidation),
  authController.loginUser,
);

router.post(
  '/change-password',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  validateRequest(authValidation.changePasswordValidation),
  authController.changePassword,
);

router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshTokenValidation),
  authController.refreshToken,
);

router.post(
  '/forget-password',
  validateRequest(authValidation.forgetPasswordValidation),
  authController.forgetPassword,
);

router.post(
  '/reset-password',
  validateRequest(authValidation.forgetPasswordValidation),
  authController.resetPassword,
);

export const authRoutes = router;
