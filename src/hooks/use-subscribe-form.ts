import { subScribeMessageError } from "@/lib/data";
import axios, { AxiosError } from "axios";
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

      setMessage(data.message);
      setHasError(false);
    } catch (error) {
      setMessage(
        error instanceof AxiosError &&
          subScribeMessageError === error.response?.data.message
          ? error.response?.data.message
          : "An error occurred. Try again later"
      );
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
