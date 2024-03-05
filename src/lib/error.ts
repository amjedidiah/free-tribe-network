import { isAxiosError } from "axios";
import { NextResponse } from "next/server";

export class HttpError extends Error {
  status?: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

export const handleResponseError = (error: unknown) => {
  let errorObject = {} as HttpError;

  if (typeof error === "string") errorObject.message = error;
  else if (error instanceof HttpError) errorObject = error;
  else if (error instanceof Error) errorObject.message = error.message;

  console.error(error);
  return NextResponse.json(
    {
      data: null,
      message: errorObject.message,
    },
    {
      status: errorObject.status || 500,
    }
  );
};

export const getFEErrorMessage = (error: unknown) => {
  console.error(error);

  let errorMessage = "";
  if (isAxiosError(error))
    errorMessage = error.response?.data.message ?? error.message;
  else errorMessage = "An error occurred. Try again later";

  return errorMessage;
};
