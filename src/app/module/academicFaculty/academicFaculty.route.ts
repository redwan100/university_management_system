import { Router } from 'express';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/valideteRequest';
import { USER_ROLE } from '../user/userConstant';
import { academicFacultyControllers } from './academicFacultyController';
import { academicFacultyValidations } from './academicFacultyValidation';

const router = Router();

router.post(
  '/create-academic-faculty',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
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
