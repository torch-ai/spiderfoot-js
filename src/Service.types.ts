export interface IServiceOptions {
  instanceUrl: string;
}

export class SpiderfootError extends Error {
  public code: number;
  public isSpiderfootError = true;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

export class SpiderfootConfigError extends SpiderfootError {
  constructor(message: string) {
    const errorCode = 1;
    super(message, errorCode);
  }
}
