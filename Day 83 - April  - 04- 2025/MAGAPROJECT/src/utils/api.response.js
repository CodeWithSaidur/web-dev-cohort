class ApiResponse {
  constructor(
    statusCode,
    data,
    massage = 'Success'
  ) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = massage;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
