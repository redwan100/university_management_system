import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).trim().toLowerCase(),
  middleName: z.string().trim().optional(),
  lastName: z.string().min(1).trim(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameValidationSchema.required(),
      gender: z.enum(['male', 'female', 'other']),
      email: z.string().email(),
      dateOfBirth: z.string().optional(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'O', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema.required(),
      localGuardian: localGuardianValidationSchema.required(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
