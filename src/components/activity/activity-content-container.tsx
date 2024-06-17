"use client";

import useActivityLocaleHandler, {
  type Familiar,
} from "@/hooks/use-activity-locale-handler";
import { PropsWithChildren, Suspense } from "react";

export default function ActivityContentContainer({
  children,
  familiars,
}: PropsWithChildren<{
  familiars: Familiar;
}>) {
  useActivityLocaleHandler(familiars);

  return <Suspense fallback={null}>{children}</Suspense>;
}
