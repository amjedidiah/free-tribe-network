"use client";

import { Button } from "@/components/ui/button";
import useSubscribeForm from "@/hooks/use-subscribe-form";
import { cn } from "@/lib/utils";
import { Fragment, memo } from "react";
import { EmailFormFields, FormHooks } from "react-mailchimp-subscribe";
import ShouldRender from "@/components/shared/should-render";

function SubscribeForm(props: FormHooks<EmailFormFields>) {
  const {
    email,
    handleEmailChange,
    handleSubmit,
    hasError,
    message,
    isLoading,
  } = useSubscribeForm(props);

  return (
    <Fragment>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className="rounded-md flex-grow text-black py-2 px-3 h-auto"
          type="email"
          name="email"
          aria-label="Email Address"
          placeholder="Email Address"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          className={cn("h-auto w-32", {
            "animate-pulse": isLoading,
          })}
          disabled={isLoading}
        >
          Subscribe
        </Button>
      </form>
      <ShouldRender condition={!!message}>
        <p
          className={cn("text-white-500 text-xs -mt-2", {
            "text-primary-500": hasError,
          })}
        >
          {message as string}
        </p>
      </ShouldRender>
    </Fragment>
  );
}

export default memo(SubscribeForm);