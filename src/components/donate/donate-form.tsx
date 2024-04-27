"use client";
import { Button } from "@/components/ui/button";
import useDonateForm from "@/hooks/use-donate-form";
import { cn } from "@/lib/utils";
import { FaEnvelope } from "react-icons/fa6";

export default function DonateForm() {
  const {
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
  } = useDonateForm();

  return (
    <div className="flex flex-col gap-1 sm:gap-3 p-4 sm:p-7 bg-white shadow-xl rounded-[0.5rem] lg:absolute top-1/2 lg:-translate-y-1/2 right-8 max-sm:w-[calc(100vw-2rem)]">
      <form className="flex flex-col gap-3 sm:gap-5" onSubmit={handleSubmit}>
        <div className="text-black flex items-center justify-between border border-[#ddd] rounded-[0.5rem] p-3 lg:p-4">
          <div className="flex gap-2 items-center text-lg flex-1">
            <span>
              <FaEnvelope />
            </span>
            <input
              type="text"
              name="email"
              id="email"
              aria-label="email"
              className="outline-none border-none text-lg flex-1"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="text-black flex gap-2 items-center justify-between border border-[#ddd] rounded-[0.5rem] p-3 lg:p-4">
          <div className="flex gap-2 items-center text-lg flex-1">
            <span>{currency?.sign}</span>
            <input
              type="number"
              name="amount"
              id="amount"
              aria-label="amount"
              className="outline-none border-none text-lg flex-1"
              value={amount}
              onChange={handleAmountChange}
              min={1}
            />
          </div>
          <select
            title="currency"
            name="currency"
            id="currency"
            className="uppercase bg-transparent text-sm outline-none border-none cursor-pointer"
            value={currencyLabel}
            onChange={handleChangeCurrencyLabel}
          >
            <option disabled value={""}>
              Choose
            </option>
            {Object.values(currencies).map(({ label }) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid max-lg:grid-cols-2 gap-4 lg:gap-2">
          <div
            className={cn(
              "cursor-pointer p-3 lg:p-5 rounded-[0.5rem] border border-[#ddd] h5-gap items-start gap-1",
              { "shadow-xl border-2 border-primary-500": !isReoccurring }
            )}
            onClick={() => setIsReoccurring(false)}
          >
            <h5 className="text-black flex items-center">
              <span>One Time</span>
            </h5>
            <p className="text-[#777]">Donate once</p>
          </div>
          <div
            className={cn(
              "cursor-pointer p-3 lg:p-5 rounded-[0.5rem] border border-[#ddd] h5-gap items-start gap-1",
              { "shadow-xl border-2 border-primary-500": isReoccurring }
            )}
            onClick={() => setIsReoccurring(true)}
          >
            <h5 className="text-black flex items-center">
              <span>Monthly</span>
            </h5>
            <p className="text-[#777]">Donate monthly</p>
          </div>
        </div>
        <Button
          className="p-4 w-full"
          disabled={!email || !currency || hasError}
        >
          Donate Now
        </Button>
      </form>
      {message && (
        <p
          className={cn({
            "text-primary-500": hasError,
            "text-secondary-500": !hasError,
          })}
        >
          {message}
        </p>
      )}
    </div>
  );
}
