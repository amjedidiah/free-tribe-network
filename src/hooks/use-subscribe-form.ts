import { getFEErrorMessage } from "@/lib/error";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function useSubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/mail/subscribe", { email });

      setMessage(data?.message);
      setHasError(false);
    } catch (error) {
      const errorMessage = getFEErrorMessage(error);
      setMessage(errorMessage);
      setHasError(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return {
    email,
    handleEmailChange,
    handleSubmit,
    message,
    hasError,
    isLoading,
  };
}
