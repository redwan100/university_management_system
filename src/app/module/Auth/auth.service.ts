import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';

const loginUserIntoDB = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByCustomId(payload?.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'user is deleted');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'user is blocked');
  }

  //   TODO: checking  if  password is correct
  if (!(await User.isPasswordMatch(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'password do not match');
  }

  const jwtPayload = {
    userId: user?.id,
    role: user.role,
  };
  //   TODO:  create a token
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '1d',
  });

  return {
    accessToken,
    needsPasswordChange: user?.needPasswordChange,
  };
};

const changePassword = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  const user = await User.isUserExistsByCustomId(userData?.userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'user is deleted');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'user is blocked');
  }

  //   TODO: checking  if  password is correct
  if (!(await User.isPasswordMatch(payload?.oldPassword, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'password do not match');
  }

  // hash new password
  const newHashedPassword = await bcrypt.hash(payload?.newPassword, 12);

  await User.findOneAndUpdate(
    {
      id: userData?.userId,
      role: userData?.role,
    },
    { password: newHashedPassword, needPasswordChange: false,passwordChangeAt: new Date() },
  );

  return null;
};

export const authServices = {
  loginUserIntoDB,
  changePassword,
};
