import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error  handle
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
