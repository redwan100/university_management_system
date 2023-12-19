import express from 'express';
import { userController } from './user.controller';

import validateRequest from '../../middleware/valideteRequest';
import { AdminValidations } from '../admin/admin.validation';
import { facultyValidation } from '../faculty/faculty.validation';
import { studentValidations } from '../student/student.validation.zod';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  userController.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(facultyValidation.createFacultyValidationSchema),
  userController.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminValidationSchema),
  userController.createAdmin,
);

export const userRouter = router;
