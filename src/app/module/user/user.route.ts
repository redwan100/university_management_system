import express from 'express';
import { userController } from './user.controller';

import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { AdminValidations } from '../admin/admin.validation';
import { facultyValidation } from '../faculty/faculty.validation';
import { studentValidations } from '../student/student.validation.zod';
import { USER_ROLE } from './userConstant';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE?.admin),
  validateRequest(studentValidations.createStudentValidationSchema),
  userController.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE?.admin),
  validateRequest(facultyValidation.createFacultyValidationSchema),
  userController.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(AdminValidations.createAdminValidationSchema),
  userController.createAdmin,
);

router.get('/me', auth('student', 'faculty', 'admin'), userController.getMe);

export const userRouter = router;
