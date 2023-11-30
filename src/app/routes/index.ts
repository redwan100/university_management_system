import { Router } from 'express';
import { userRouter } from '../module/user/user.route';
import { studentRouter } from '../module/student/student.route';
import { academicSemesterRoutes } from '../module/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/students',
    route: studentRouter,
  },

  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
