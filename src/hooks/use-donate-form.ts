import {
  amountToCents,
  formatAmount,
  validateEmailWithRegex,
} from "@/lib/utils";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { currencies } from "@/lib/data";
import usePayStack from "./use-paystack";
import axios from "axios";
import { getFEErrorMessage } from "@/lib/error";

const INIT_AMOUNT = 1;
const INIT_RATE = 1;
const INIT_CURRENCY_INDEX = 2;
const DOLLAR_CURRENCY_INDEX = 1;
const VALIDATION_WAIT_TIME = 1000;
const RESPONSE_DISPLAY_TIME = 2500;

export default function useDonateForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [rate, setRate] = useState(INIT_RATE);
  const [isReoccurring, setIsReoccurring] = useState(true);
  const [amount, setAmount] = useState(INIT_AMOUNT);
  const [currencyCount, setCurrencyCount] = useState(INIT_CURRENCY_INDEX);
  const currency = useMemo(() => {
    if (currencyCount === INIT_CURRENCY_INDEX) return;

    return currencies[currencyCount];
  }, [currencyCount]);
  const initializePayment = usePayStack();

  const resetMessage = () =>
    setTimeout(() => setMessage(""), RESPONSE_DISPLAY_TIME);

  const onSuccess = () => {
    setMessage(
      `Donation for ${currency?.sign}${formatAmount(amount)} successful`
    );
    resetMessage();
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(+e.currentTarget.value);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const getMultiplier = () => {
    const prevCurrencyCount = currencyCount;
    if (prevCurrencyCount === DOLLAR_CURRENCY_INDEX) return rate;
    if (prevCurrencyCount === INIT_CURRENCY_INDEX) return 1;

    return 1 / rate;
  };

  const handleChangeCurrencyCount = (e: ChangeEvent<HTMLSelectElement>) => {
    const multiplier = getMultiplier();

    setAmount((prev) => Math.round(prev * multiplier) || INIT_AMOUNT);
    setCurrencyCount(+e.currentTarget.value);
  };

  const handleSubscription = async () => {
    // Attempt to fetch the plan
    const { data } = await axios.get(
      `/api/plans?amount=${amount}&currency=${currency?.label}`
    );

    // Create a plan with the amount and currency if the plan does not exist
    let plan_code = data?.data?.plan_code;
    if (!plan_code) {
      const response = await axios.post("/api/plans", {
        amount,
        currency: currency?.label,
      });

      plan_code = response.data?.data?.plan_code;
    }

    // Subscribe to this plan
    initializePayment({
      onSuccess,
      onClose: resetMessage,
      config: {
        email,
        reference: new Date().getTime().toString(),
        currency: currency?.label,
        label: "FTN Monthly Donation",
        plan: plan_code,
        amount: 0,
      },
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasError(false);
    setMessage("Processing...");

    try {
      // Handle subscription
      if (isReoccurring) {
        await handleSubscription();
        return;
      }

      initializePayment({
        onSuccess,
        onClose: resetMessage,
        config: {
          amount: amountToCents(amount),
          email,
          reference: new Date().getTime().toString(),
          currency: currency?.label,
          label: "FTN One-time Donation",
        },
      });
    } catch (error) {
      const errorMessage = getFEErrorMessage(error);
      setHasError(true);
      setMessage(errorMessage);

      setTimeout(() => {
        setHasError(false);
        setMessage("");
      }, RESPONSE_DISPLAY_TIME);
    }
  };

  const handleValidateEmail = useDebouncedCallback((email: string) => {
    const isEmailValid = validateEmailWithRegex(email);

    setHasError(!isEmailValid);
    setMessage(isEmailValid ? "" : "Please enter a valid email address");
  }, VALIDATION_WAIT_TIME);

  const handleValidateAmount = useDebouncedCallback((amount: number) => {
    const isValidAmount = amount >= (currency?.min || 0);

    setHasError(!isValidAmount);
    setMessage(
      isValidAmount
        ? ""
        : `Minimum donation amount is ${currency?.sign} ${currency?.min}`
    );
  }, VALIDATION_WAIT_TIME);

  useEffect(() => {
    if (!email) return;
    handleValidateEmail(email);
  }, [email, handleValidateEmail]);

  useEffect(() => {
    if (!currency) return;
    handleValidateAmount(amount);
  }, [currency, amount, handleValidateAmount]);

  useEffect(() => {
    if (rate === INIT_RATE)
      axios
        .post("/api/rate", { currency: "NGN" })
        .then(({ data }) => setRate(data))
        .catch(console.error);
  }, [rate]);

  return {
    handleSubmit,
    email,
    handleEmailChange,
    currency,
    amount,
    handleAmountChange,
    currencyCount,
    handleChangeCurrencyCount,
    currencies,
    hasError,
    message,
    isReoccurring,
    setIsReoccurring,
  };
}
