import { Router } from 'express';
import { academicFacultyControllers } from './academicFacultyController';
import validateRequest from '../../middleware/valideteRequest';
import { academicFacultyValidations } from './academicFacultyValidation';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidations.createAcademicFacultyValidation),
  academicFacultyControllers.createAcademicFaculty,
);

router.get('/:facultyId', academicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(academicFacultyValidations.updateAcademicFacultyValidation),
  academicFacultyControllers.updateSingleAcademicFaculty,
);

router.get('/', academicFacultyControllers.getAllAcademicFaculty);

export const academicFacultyRoutes = router;
