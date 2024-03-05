import { handleResponseError } from "@/lib/error";
import { NextRequest, NextResponse } from "next/server";
import ratesData from "@/responses/rates.json";

type RatesData = typeof ratesData;

export async function POST(request: NextRequest) {
  try {
    const { currency } = await request.json();
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}/latest/USD`
    );
    const { conversion_rates }: RatesData = await res.json();

    const currencyRate =
      conversion_rates &&
      conversion_rates[currency as keyof typeof conversion_rates];

    return NextResponse.json({
      data: currencyRate,
      message: "Currency rate fetched successfully",
    });
  } catch (error) {
    return handleResponseError(error);
  }
}
