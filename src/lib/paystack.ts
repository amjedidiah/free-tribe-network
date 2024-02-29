import { Paystack } from "paystack-sdk";
import { HttpError } from "@/lib/error";
import { validCurrencies } from "@/lib/data";
import { amountToCents, formatAmount } from "@/lib/utils";
import { Currency } from "paystack-sdk/dist/interface";

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY!);

export const getValidAmount = (
  amount: PaymentCurrencyAmount["value"] | null | number
) => {
  if (!amount) throw new HttpError(400, "Please provide an amount");

  const amountNumber = Number(amount);
  if (Number.isNaN(amountNumber))
    throw new HttpError(400, "Please provide a valid amount");

  return {
    formattedAmount: formatAmount(amountNumber),
    amountInCents: amountToCents(amountNumber),
  };
};

export const getValidCurrency = (currency: Currency | null) => {
  if (!currency) throw new HttpError(400, "Please provide a currency");

  if (!validCurrencies.includes(currency))
    throw new HttpError(400, "Please provide a valid currency");

  return currency;
};

export const fetchPlan = async (amountInCents: number, currency: Currency) => {
  const { status, message, data } = await paystack.plan.list({
    amount: amountInCents,
  });
  if (!status) throw new HttpError(400, message);

  const filteredData = [data]
    .filter(Boolean)
    .flat(10)
    .filter((item: any) => item.currency === currency);

  return { data: filteredData[0], message };
};

export default paystack;
