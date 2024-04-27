"use server";

import { formatAmount } from "@/lib/utils";
import { CurrencyKeys } from "@/lib/data";
import { cache } from "react";
import axios from "axios";
import { FlwPaymentPlan } from "@/lib/types";

const flw = axios.create({
  baseURL: "https://api.flutterwave.com/v3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
  },
});

const fetchPaymentPlan = cache(
  async (amount: number, currency: CurrencyKeys) => {
    try {
      const { data } = await flw.get<{
        data: FlwPaymentPlan[];
        message: string;
        status: string;
      }>("/payment-plans");
      const plans = data?.data;
      if (!plans) {
        console.info(`No donation plans found for ${currency} ${amount}`);
        return;
      }

      const foundPlan = plans.filter(
        (item) => item.amount === amount && item.currency === currency
      )[0];

      return foundPlan;
    } catch (error) {
      console.error(error);
    }
  }
);

export const handlePaymentPlanId = async (
  amount: number,
  currency: CurrencyKeys
) => {
  const formattedAmount = formatAmount(amount);
  try {
    const plan = await fetchPaymentPlan(amount, currency);
    if (plan) {
      console.info(`Found donation plan for ${currency} ${amount}:`, plan);
      return plan.id.toString();
    }

    const { data } = await flw.post<{
      data: FlwPaymentPlan;
      message: string;
      status: string;
    }>("/payment-plans", {
      amount,
      name: `${currency} ${formattedAmount} - Donation Plan`,
      interval: "monthly",
      currency,
    });
    console.info(
      `Created donation plan for ${currency} ${amount}:`,
      data?.data
    );

    return data?.data.id.toString();
  } catch (error) {
    console.error(error);
  }
};
