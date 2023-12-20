import httpStatus from 'http-status';
import catchAsync from '../../middleware/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is retrieved successfully',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;
  const result = await authServices.changePassword(req.user, passwordData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'password update is successful',
    data: result,
  });
});

export const authController = {
  loginUser,
  changePassword,
};
