import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = [
  {
    id: "1",
    question: "How is my donation used? ",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network.",
  },
  {
    id: "2",
    question: "How can I be sure my donation is safe?",
    answer:
      "We use SSL encryption to protect your information and ensure that your donation is secure. Your card and personal data will be safe and secure.",
  },
  {
    id: "3",
    question: "Can I sponsor a specific interest? ",
    answer:
      " donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "4",
    question: "Will I get a receipt for my donation?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "5",
    question: "How do I contact Free Tribe Network for ​additional information or inquiries ?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
  {
    id: "6",
    question: "How can I get involved?",
    answer:
      "Your donation is used to support programs, projects and research conducted by the  Free Tribe Network ",
  },
];

export default function Page() {
  return (
    <main>
      <section className="space-y-4">
        <div className="container space-y-2 lg:space-y-3">
          <h1 className="font-semibold text-3xl lg:text-4xl">
            Our Accomplishment
          </h1>
          <p className="tracking-wide">
            The Free Tribe Network is dedicated to creating a world where
            everyone has the knowledge, resources and support needed for optimal
            reproductive health and family well-being. Join us to build
            healthier, happier communities, by empowering us to do even more.
          </p>
          <p className="tracking-wide">
            Thank you for being a part of the change.
          </p>
        </div>
        <Image
          src="/images/donate.png"
          alt="Donate"
          width={1440}
          height={400}
        />
      </section>
      <section className="bg-[#E6EFF3] py-12 lg:py-24">
        <div className="container flex flex-col gap-6 lg:gap-16">
          <div className="flex items-center justify-between">
            <div className="text-base lg:text-3xl font-bold lg:space-y-2">
              <h2>Got Questions?</h2>
              <h2>We&apos;ve Got Answers</h2>
            </div>
            <Button>Donate Now</Button>
          </div>
          <div className="max-w-5xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {data.map((i) => (
                <AccordionItem key={i.id} value={i.id}>
                  <AccordionTrigger>{i.question}</AccordionTrigger>
                  <AccordionContent>{i.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
