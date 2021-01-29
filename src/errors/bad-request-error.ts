import { reduceEachTrailingCommentRange } from 'typescript';
import { CustomError } from './custom-error';

export class badRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, badRequestError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message}]
    }
}