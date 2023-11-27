import { Request, Response } from 'express';
// import userValidationSchema from './user.validation';
import { userService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParseData = userValidationSchema.parse(studentData);
    const result = await userService.createStudentIntoDB(password, studentData);
    res.status(201).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
    });
  }
};

export const userController = {
  createStudent,
};
