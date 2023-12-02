import { Router } from 'express';
import validateRequest from '../../middleware/valideteRequest';
import { academicDepartmentValidations } from './academicDepartment.validation';
import { academicDepartmentControllers } from './academicDepartment.controller';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(academicDepartmentValidations.academicDepartmentValidation),
  academicDepartmentControllers.createAcademicDepartment,
);

router.get(
  '/:facultyId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:facultyId',
  validateRequest(
    academicDepartmentValidations.updateAcademicDepartmentValidation,
  ),
  academicDepartmentControllers.updateSingleAcademicDepartment,
);

router.get('/', academicDepartmentControllers.getAllAcademicDepartment);

export const academicDepartmentRoutes = router;
