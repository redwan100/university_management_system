import express from 'express';
import validateRequest from '../../middleware/valideteRequest';
import { StudentController } from './student.controller';
import { updateStudentValidation } from './student.validation.zod';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(updateStudentValidation),
  StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteStudent);

export const studentRouter = router;
