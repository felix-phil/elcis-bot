import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationErrror extends CustomError {
  statusCode: number = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Because of class extension
    Object.setPrototypeOf(this, RequestValidationErrror.prototype);
  }
  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
