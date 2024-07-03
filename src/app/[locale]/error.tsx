"use client";
import { useEffect } from "react";
import ErrorLayout from "@/components/shared/error-layout";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorLayout name="Error" action={reset} />;
}
