import { ZodError, ZodIssue } from 'zod';
import { TEerrorSources, TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError):TGenericErrorResponses => {
  const errorSources: TEerrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: ' Validation Error',
    errorSources,
  };
};

export default handleZodError;
