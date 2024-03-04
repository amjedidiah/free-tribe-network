import { Paystack } from "paystack-sdk";
import { HttpError } from "@/lib/error";
import { CurrencyKeys } from "@/lib/data";
import {
  amountToCents,
  formatAmount,
  validateDonationAmount,
} from "@/lib/utils";
import { Currency } from "paystack-sdk/dist/interface";

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY!);

export const getValidAmount = (amount: number, currencyLabel: CurrencyKeys) => {
  const isValidAmount = validateDonationAmount(amount, currencyLabel);
  if (!isValidAmount) throw new HttpError(400, "Please provide a valid amount");

  return {
    formattedAmount: formatAmount(amount),
    amountInCents: amountToCents(amount),
  };
};

export const getValidCurrency = (currency: CurrencyKeys) => {
  if (!CurrencyKeys[currency])
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
