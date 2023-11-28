import express, { Application, Request, Response } from 'express';
import { userRouter } from './app/module/user/user.route';
import { studentRouter } from './app/module/student/student.route';
import cors from 'cors';
import morgan from 'morgan';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error  handle
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
