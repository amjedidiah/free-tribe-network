import {
  formatAmount,
  getDonationCurrency,
  validateDonationAmount,
  validateEmailWithRegex,
} from "@/lib/utils";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CurrencyKeys, currencies } from "@/lib/data";
import axios from "axios";
import { getFEErrorMessage } from "@/lib/error";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { handlePaymentPlanId } from "@/lib/actions/flutterwave";

const INIT_AMOUNT = 1;
const INIT_RATE = 1;
const INIT_CURRENCY_LABEL = "" as CurrencyKeys;
const DOLLAR_CURRENCY_LABEL = CurrencyKeys.USD;
const VALIDATION_WAIT_TIME = 1000;
const RESPONSE_DISPLAY_TIME = 2500;

export default function useDonateForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [rate, setRate] = useState(INIT_RATE);
  const [isReoccurring, setIsReoccurring] = useState(true);
  const [amount, setAmount] = useState(INIT_AMOUNT);
  const [currencyLabel, setCurrencyLabel] =
    useState<CurrencyKeys>(INIT_CURRENCY_LABEL);
  const currency = useMemo(() => {
    if (currencyLabel === INIT_CURRENCY_LABEL) return;

    return getDonationCurrency(currencyLabel);
  }, [currencyLabel]);
  const [paymentPlanId, setPaymentPlanId] = useState<string>();

  const initializePayment = useFlutterwave({
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount,
    currency: currency?.label,
    payment_options: "card,mobilemoney,ussd",
    payment_plan: paymentPlanId,
    customer: {
      email,
      phone_number: "",
      name: "",
    },
    customizations: {
      title: `FTN ${isReoccurring ? "Monthly" : "One-time"} Donation`,
      description: "Donation to Free Tribe Network",
      logo: "https://free-tribe-network.vercel.app/_next/image?url=%2Fimages%2Flogo.webp&w=128&q=75",
    },
  });

  const resetMessage = () =>
    setTimeout(() => setMessage(""), RESPONSE_DISPLAY_TIME);

  const onSuccess = () => {
    closePaymentModal();
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
    const prevCurrencyCount = currencyLabel;

    if (prevCurrencyCount === DOLLAR_CURRENCY_LABEL) return rate;
    if (prevCurrencyCount === INIT_CURRENCY_LABEL) return 1;

    return 1 / rate;
  };

  const handleChangeCurrencyLabel = (e: ChangeEvent<HTMLSelectElement>) => {
    const multiplier = getMultiplier();

    setAmount((prev) => Math.round(prev * multiplier) || INIT_AMOUNT);
    setCurrencyLabel(e.currentTarget.value as CurrencyKeys);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasError(false);
    setMessage("Processing...");

    try {
      // Handle subscription
      if (isReoccurring) {
        const paymentPlanId = await await handlePaymentPlanId(
          amount,
          currency?.label as CurrencyKeys
        );
        if (paymentPlanId) setPaymentPlanId(paymentPlanId);
        else
          throw "Error making monthly donation. Please try one time donation";
      }

      initializePayment({
        callback: onSuccess,
        onClose: resetMessage,
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
    const isValidAmount = validateDonationAmount(amount, currencyLabel);

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
        .then(({ data }) => setRate(data.data))
        .catch(console.error);
  }, [rate]);

  return {
    handleSubmit,
    email,
    handleEmailChange,
    currency,
    amount,
    handleAmountChange,
    currencyLabel,
    handleChangeCurrencyLabel,
    currencies,
    hasError,
    message,
    isReoccurring,
    setIsReoccurring,
  };
}
