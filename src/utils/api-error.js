class ApiError extends Error {
  constructor(
    statusCode,
    massage = "Something want wrong",
    errors,
    stack,
  ) {
    super(massage)
    this.statusCode = statusCode
    this.massage = massage
    this.errors = errors
    this.data = null
    this.success = false

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }


  }
}

export {ApiError}
