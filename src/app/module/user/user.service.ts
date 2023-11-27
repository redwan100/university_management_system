import { TUser } from './user.interface';
import config from '../../config';
import { TStudent } from '../student/Student.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // TODO: create a user object
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);

  //TODO: set student role
  userData.role = 'student';

  // manually generate id
  const id = '202312';
  userData.id = id;

  // TODO: create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(userData).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //  reference _id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

  return newUser;
};

export const userService = {
  createStudentIntoDB,
};
