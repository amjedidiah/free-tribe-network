"use client";
import { Button } from "@/components/ui/button";
import useSubscribeForm from "@/hooks/use-subscribe-form";
import { cn } from "@/lib/utils";

export default function SubscribeForm() {
  const {
    email,
    handleEmailChange,
    handleSubmit,
    hasError,
    message,
    isLoading,
  } = useSubscribeForm();

  return (
    <div
      id="mailing-list"
      className="lg:w-[25rem] w-contain flex flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-1">
        <h4>Subscribe to our mail</h4>
        <p className="text-slate-300">
          By registering, you permit the{" "}
          <span className="font-bold">Free Tribe Network</span> to store and
          collect your email address for the purpose of sending you our monthly
          newsletter.
        </p>
      </div>
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
      {message && (
        <p
          className={cn({
            "text-primary-500": hasError,
            "text-white-500": !hasError,
          })}
        >
          {message}
        </p>
      )}
    </div>
  );
}
