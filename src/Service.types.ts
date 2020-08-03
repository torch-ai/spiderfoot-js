export interface IServiceOptions {
  instanceUrl: string;
}

export class SpiderfootError extends Error {
  public code: string = "000";
  public isSpiderfootError = true;

  constructor(message: string) {
    super(message);
  }
}

export class SpiderfootConfigError extends SpiderfootError {
  public code: string = "001";
}

export class SpiderfootRequestError extends SpiderfootError {
  public code: string = "400";
}

export class SpiderfootInvalidRequestError extends SpiderfootRequestError {
  public code: string = "406";
}

export class SpiderfootPreconditionFailedRequestError extends SpiderfootRequestError {
  public code: string = "412";
}
