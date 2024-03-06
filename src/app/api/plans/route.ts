import { CurrencyKeys } from "@/lib/data";
import { HttpError, handleResponseError } from "@/lib/error";
import paystack, {
  fetchPlan,
  getValidAmount,
  getValidCurrency,
} from "@/lib/paystack";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get params
    const { searchParams } = request.nextUrl;
    const amount = searchParams.get("amount");
    const currency = searchParams.get("currency");

    // Validate params
    const planCurrency = getValidCurrency(currency as CurrencyKeys);
    const { amountInCents } = getValidAmount(
      Number(amount),
      currency as CurrencyKeys
    );

    // Fetch plan
    const body = await fetchPlan(amountInCents, planCurrency);

    return NextResponse.json({
      data: body.data,
      message: body.data ? "Plan retrieved successfully" : "Plan not found",
    });
  } catch (error) {
    return handleResponseError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get body
    const { amount, currency } = await request.json();

    // Validate body
    const planCurrency = getValidCurrency(currency);
    const { amountInCents, formattedAmount } = getValidAmount(amount, currency);

    // Check if plan already exists
    const { data: plan } = await fetchPlan(amountInCents, planCurrency);
    if (plan) throw new HttpError(400, "This plan already exists");

    const { status, message, data } = await paystack.plan.create({
      name: `${currency} ${formattedAmount} - Donation Plan`,
      amount: amountInCents,
      interval: "monthly",
      currency,
    });
    if (!status) throw new HttpError(400, message);

    return NextResponse.json(
      {
        data,
        message,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return handleResponseError(error);
  }
}
