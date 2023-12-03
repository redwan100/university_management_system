import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middleware/valideteRequest';
import { updateStudentValidation } from './student.validation.zod';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidation),
  StudentController.updateStudent,
);
router.delete('/:studentId', StudentController.deleteStudent);

export const studentRouter = router;
