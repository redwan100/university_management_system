import { Router } from 'express';
import validateRequest from '../../middleware/valideteRequest';
import { courseControllers } from './course.controller';
import { courseValidation } from './course.validation';

const router = Router();

router.post(
  '/create-course',
  validateRequest(courseValidation.createCourseValidation),
  courseControllers.createCourse,
);

router.get('/', courseControllers.getAllCourse);
router.get('/:id', courseControllers.getSingleCourse);
router.delete('/:id', courseControllers.deleteCourse);

router.patch(
  '/:id',
  validateRequest(courseValidation.updateCourseValidation),
  courseControllers.updateCourse,
);

router.put(
  '/:courseId/assign-faculties',
  courseControllers.assignFacultiesWithCourse,
);

router.delete(
  '/:courseId/remove-faculties',
  courseControllers.removeFacultiesFromCourse,
);

export const courseRoutes = router;
