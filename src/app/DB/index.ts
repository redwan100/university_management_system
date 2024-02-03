import config from '../config';
import { User } from '../module/user/user.model';
import { USER_ROLE } from '../module/user/userConstant';

const superUser = {
  id: '0001',
  email: 'redwanislam.me@gmail.com',
  password: config.super_admin_password,
  needPasswordChange: false,
  role: USER_ROLE.superAdmin,
  status: 'in-progress',
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSuperAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
