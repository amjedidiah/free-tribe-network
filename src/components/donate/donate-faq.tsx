"use client";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { donationFAQs } from "@/lib/data";
import { Link as ScrollLink } from "react-scroll";
import SafeHTML from "@/components/shared/safe-html";

export default function DonateFAQ() {
  return (
    <section className="bg-secondary-50 py-10 lg:py-16">
      <article className="container flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-row flex-wrap h2-gap justify-between items-center">
          <h2>
            Got Questions?
            <br />
            We&apos;ve Got Answers!
          </h2>
          <ScrollLink
            to="donate-banner"
            smooth
            className="bg-primary-400 text-white py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
          >
            Donate
          </ScrollLink>
        </div>
        <div className="max-w-5xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {donationFAQs.map((i) => (
              <AccordionItem key={i.id} value={i.id}>
                <AccordionTrigger>{i.question}</AccordionTrigger>
                <AccordionContent className="[&_a]:underline">
                  <SafeHTML htmlContent={i.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </article>
    </section>
  );
}
