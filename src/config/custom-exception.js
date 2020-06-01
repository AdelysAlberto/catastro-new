class CatastroException extends Error {
  constructor(message, statusCode = 400) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = 'CatastroException';
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = CatastroException;
