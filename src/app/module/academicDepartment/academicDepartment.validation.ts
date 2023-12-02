import { z } from 'zod';
const academicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'academic department must be string',
      required_error: 'name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'academic department must be string',
      required_error: 'department is required',
    }),
  }),
});

const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'academic department must be string',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'academic department must be string',
      })
      .optional(),
  }),
});

export const academicDepartmentValidations = {
  academicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
