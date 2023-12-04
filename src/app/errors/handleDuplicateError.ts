import { TEerrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSources: TEerrorSources = [
    {
      path: '',
      message: extractedMessage,
    },
  ];

  const statusCode = 404;
  return {
    statusCode,
    message: 'invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;
