import { usePaystackPayment } from "react-paystack";

export default function usePayStack() {
  const initializePayment = usePaystackPayment({
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
  });

  return initializePayment;
}
