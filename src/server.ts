import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

const main = async () => {
  try {
    await mongoose.connect(config.database_uri as string);

    server = app.listen(config.port, () => {
      console.log(`university app listening at port ${config.port}`);
      console.log('Database is connected✅');
    });
  } catch (error) {
    console.log(error);
  }
};

main();

process.on('unhandledRejection', () => {
  console.log('😡 unhandled rejection is detected. shuting down...');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('😡 uncaughtException rejection is detected. shuting down...');
  process.exit(1);
});
