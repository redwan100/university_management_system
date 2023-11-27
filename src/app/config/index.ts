import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_uri: process.env.MONGODB_URI,
  node_env: process.env.NODE_ENV,
  default_pass: process.env.DEFAULT_PASS,
};
