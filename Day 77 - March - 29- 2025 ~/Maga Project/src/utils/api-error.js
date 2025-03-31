class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (!stack) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = stack;
    }
  }
}

export { ApiError };
