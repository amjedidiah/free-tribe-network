"use client";

import useScrollToSection, {
  UseScrollToSectionProps,
} from "@/hooks/use-scroll-to-section";
import { Suspense } from "react";

function VirtualComponent(props: UseScrollToSectionProps) {
  useScrollToSection(props);
  return null;
}

export default function ScrollToSection(props: UseScrollToSectionProps) {
  return (
    <Suspense fallback={null}>
      <VirtualComponent {...props} />
    </Suspense>
  );
}
