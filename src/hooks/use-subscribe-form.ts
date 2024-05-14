import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { EmailFormFields, FormHooks } from "react-mailchimp-subscribe";

export default function useSubscribeForm({
  status,
  message: text,
  subscribe,
}: FormHooks<EmailFormFields>) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(text);
  const hasError = status === "error";
  const isLoading = status === "sending";

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    subscribe({ EMAIL: email });
  };

  useEffect(() => {
    setMessage(text);

    setTimeout(() => setMessage(""), 3000);
  }, [text]);

  return {
    email,
    handleEmailChange,
    handleSubmit,
    message,
    hasError,
    isLoading,
  };
}
