import { z } from 'zod';

const loginValidation = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
const changePasswordValidation = z.object({
  body: z.object({
    oldPassword: z.string({required_error:'old password is required'}),
    newPassword: z.string({ required_error: 'Password is required' }),
  }),
});

export const authValidation = {
  loginValidation,
  changePasswordValidation,
};
