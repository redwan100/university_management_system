import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
// Declare the Schema of the Mongo model
const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicFaculty',
    },
  },
  { timestamps: true },
);

// TODO: checking middleware
academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExists) {
    throw new Error('This department is already exists ');
  }

  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExists = await AcademicDepartment.findOne({
    _id: query,
  });

  if (!isDepartmentExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This department does not exist');
  }

  next();
});

//Export the model
export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
