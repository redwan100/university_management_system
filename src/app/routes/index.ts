import { Router } from 'express';
import { userRouter } from '../module/user/user.route';
import { studentRouter } from '../module/student/student.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
