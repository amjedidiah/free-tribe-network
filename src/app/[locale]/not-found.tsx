"use client";
import ErrorLayout from "@/components/shared/error-layout";
import { useRouter } from "@/i18n/navigation";
import { useCallback } from "react";

export default function LocaleNotFound() {
  const router = useRouter();
  const goHome = useCallback(() => router.push("/"), [router]);

  return <ErrorLayout name="NotFound" action={goHome} />;
}
