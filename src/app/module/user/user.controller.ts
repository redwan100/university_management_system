import { NextFunction, Request, Response } from 'express';
// import userValidationSchema from './user.validation';
import { userService } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParseData = userValidationSchema.parse(studentData);
    const result = await userService.createStudentIntoDB(password, studentData);
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createStudent,
};
