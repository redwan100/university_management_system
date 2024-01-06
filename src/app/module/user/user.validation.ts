import { z } from 'zod';
import { UserStatus } from './userConstant';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'password can not be more then 20 characters' })
    .optional(),
});

export default userValidationSchema;

export const changeStatusValidation = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});
