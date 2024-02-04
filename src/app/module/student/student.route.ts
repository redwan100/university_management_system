import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { USER_ROLE } from '../user/userConstant';
import { StudentController } from './student.controller';
import { updateStudentValidation } from './student.validation.zod';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  StudentController.getAllStudents,
);

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.faculty),
  StudentController.getSingleStudent,
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(updateStudentValidation),
  StudentController.updateStudent,
);
router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  StudentController.deleteStudent,
);

export const studentRouter = router;
