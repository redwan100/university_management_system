import express from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { academicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemesterValidation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);

router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
);

router.get(
  '/',
  auth('admin'),
  academicSemesterControllers.getAllAcademicSemesters,
);

export const academicSemesterRoutes = router;
