import { Request, Response } from 'express';
import { studentService } from './student.services';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await studentService.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentService.deleteStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: ' A student successfully deleted',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
