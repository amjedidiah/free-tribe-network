import { NextRequest, NextResponse } from "next/server";
import { HttpError, handleResponseError } from "@/lib/error";
import { validate } from "deep-email-validator";
import { isDev } from "@/lib/utils";
import { subScribeMessageError } from "@/lib/data";
const SibApiV3Sdk = require("sib-api-v3-typescript");

// ContactAPI Instance
const apiInstance = new SibApiV3Sdk.ContactsApi();

// API Key config
const apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = process.env.BREVO_API_KEY!;

// Subscribe List id
const subscribeListId = Number(process.env.BREVO_SUBSCRIBE_LIST_ID!);

// Email validation
const validateEmail = (email: string) =>
  validate({
    email,
    validateDisposable: !isDev,
    validateRegex: true,
    validateSMTP: true,
    validateMx: true,
    validateTypo: false,
  });

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    const { valid } = await validateEmail(email);
    if (!valid) throw new HttpError(400, "Invalid email address");

    // Create contact method
    const createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = email;
    createContact.listIds = [subscribeListId];

    const { body } = await apiInstance
      .createContact(createContact)
      .catch((error: any) => {
        throw new HttpError(
          error.statusCode,
          error.response.body.message === "Contact already exist"
            ? subScribeMessageError
            : error.response.body.message
        );
      });

    return NextResponse.json(
      {
        data: body?.id,
        message: `You have subscribed successfully`,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return handleResponseError(error);
  }
}
