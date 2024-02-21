import { validateEmailWithRegex } from "@/lib/utils";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";
import { useDebouncedCallback } from "use-debounce";

const currencies = [
  {
    label: "NGN",
    sign: "₦",
  },
  //   {
  //     label: "USD",
  //     sign: "$",
  //   },
];

export default function useDonateForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [rate, setRate] = useState(1);
  const [isReoccurring, setIsReoccurring] = useState(false);
  const [amount, setAmount] = useState(1);
  const [currencyCount, setCurrencyCount] = useState(2);
  const currency = useMemo(() => {
    if (currencyCount > 1) return;

    return currencies[currencyCount];
  }, [currencyCount]);
  const initializePayment = usePaystackPayment({
    email,
    reference: new Date().getTime().toString(),
    currency: currency?.label || "NGN",
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    label: "Donation",
    plan: isReoccurring ? "monthly_donation" : undefined,
    quantity: amount,
  });

  const onSuccess = () => {
    setMessage(`Donation for ${currency?.sign}${amount} successful`);
    setTimeout(() => setMessage(""), 3000);
  };

  const onClose = () => {
    setAmount(0);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const num = e.currentTarget.value;
    const result = Number(num);

    setAmount(result - 0);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handleChangeCurrencyCount = (e: ChangeEvent<HTMLSelectElement>) => {
    const prevCurrencyCount = currencyCount;
    const multiplier = prevCurrencyCount === 1 ? rate : 1 / rate;

    setAmount((prev) => Math.round(prev * multiplier) || 1);
    setCurrencyCount(+e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    initializePayment({
      onSuccess,
      onClose,
    });
  };

  const fetchRate = useCallback(async () => {
    const { data } = await axios.post("/api/rate", { currency: "NGN" });

    setRate(data.data);
  }, []);

  const handleValidateEmail = useDebouncedCallback((email: string) => {
    const isEmailValid = validateEmailWithRegex(email);
    if (!isEmailValid) {
      setHasError(true);
      setMessage("Please enter a valid email address");
    } else {
      setHasError(false);
      setMessage("");
    }
  }, 1000);

  useEffect(() => {
    if (!email) return;
    handleValidateEmail(email);
  }, [email, handleValidateEmail]);

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

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
