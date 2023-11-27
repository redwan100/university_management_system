import { StudentModel } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string | number) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string | number) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
