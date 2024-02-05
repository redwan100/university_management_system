import { Router } from 'express';
import { authRoutes } from '../module/Auth/auth.route';
import { offeredCourseRoutes } from '../module/OfferedCourse/offeredCourse.route';
import { academicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.route';
import { academicFacultyRoutes } from '../module/academicFaculty/academicFaculty.route';
import { academicSemesterRoutes } from '../module/academicSemester/academicSemester.route';
import { AdminRoutes } from '../module/admin/admin.route';
import { courseRoutes } from '../module/course/course.route';
import { FacultyRoutes } from '../module/faculty/faculty.route';
import { semesterRegistrationRoutes } from '../module/semesterRegistration/semesterRegistration.route';
import { studentRouter } from '../module/student/student.route';
import { userRouter } from '../module/user/user.route';

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
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
