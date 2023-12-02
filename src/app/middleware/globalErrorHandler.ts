import { NextFunction, Request, Response } from 'express';
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message: string = 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err.message,
  });
};

export default globalErrorHandler;
