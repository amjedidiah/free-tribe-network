"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import manrope from "@/lib/font";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => console.error(error), [error]);

  return (
    <html lang="en" className="h-full">
      <body className={cn("font-manrope h-full", manrope.variable)}>
        <main className="h-full flex flex-col justify-center">
          <section>
            <article className="container text-center">
              <h1 className="font-extralight text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem]">
                Error
              </h1>
              <div className="relative flex flex-col gap-2 items-center">
                <p>Oops! An error occurred, we apologize</p>
                <button
                  onClick={reset}
                  className="bg-primary-500 text-white px-5 py-3 rounded shadow-md"
                >
                  Retry
                </button>
              </div>
            </article>
          </section>
        </main>
      </body>
    </html>
  );
}
