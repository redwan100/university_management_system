// export type TUser = {
//   id: string;
//   password: string;
//   needPasswordChange: boolean;
//   role: 'admin' | 'student' | 'faculty';
//   status: 'in-progress' | 'blocked';
//   isDeleted: boolean;

import { Model } from 'mongoose';

// };
export interface TUser {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatch(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
