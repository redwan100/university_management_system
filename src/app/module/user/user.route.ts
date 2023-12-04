import express from 'express';
import { userController } from './user.controller';

import validateRequest from '../../middleware/valideteRequest';
import { studentValidations } from '../student/student.validation.zod';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  userController.createStudent,
);

export const userRouter = router;
