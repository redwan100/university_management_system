import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';

import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { upload } from '../../utils/sendImageToCloudinary';
import { AdminValidations } from '../admin/admin.validation';
import { facultyValidation } from '../faculty/faculty.validation';
import { studentValidations } from '../student/student.validation.zod';
import { changeStatusValidation } from './user.validation';
import { USER_ROLE } from './userConstant';

const router = express.Router();

router.post(
  '/create-student',
  // auth(USER_ROLE?.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
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

router.post(
  '/change-status/:id',
  validateRequest(changeStatusValidation),
  userController.changeStatus,
);

router.get('/me', auth('student', 'faculty', 'admin'), userController.getMe);

export const userRouter = router;
