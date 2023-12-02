import httpStatus from 'http-status';

// import userValidationSchema from './user.validation';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../middleware/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // const zodParseData = userValidationSchema.parse(studentData);
  const result = await userService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully ',
    data: result,
  });
});

export const userController = {
  createStudent,
};
