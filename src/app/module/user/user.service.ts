import { TUser } from './user.interface';
import config from '../../config';
import { TStudent } from '../student/Student.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // TODO: create a user object
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);

  //TODO: set student role
  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  userData.id = await generateStudentId(admissionSemester);

  // TODO: create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //  reference _id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
