/* eslint-disable prefer-destructuring */
import { ErrorRequestHandler } from 'express';
import { ZodError, ZodIssue } from 'zod';
import config from '../config';
import { TEerrorSources } from '../interface/error';
const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  next,
) => {
  let statusCode = err.statusCode || 500;
  let message: string = 'something went wrong';

  let errorSources: TEerrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  const handleZodError = (err: ZodError) => {
    const statusCode = 400;
    const errorSources: TEerrorSources = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue?.path.length - 1],
        message: issue?.message,
      };
    });

    return {
      statusCode,
      message: ' Validation Error',
      errorSources,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
