// to handle errors

export class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  // Usage example:
  // throw new CustomError('Something went wrong.');
  