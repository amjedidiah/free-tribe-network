import Image from "next/image";
import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment } from "react";
import Banner from "@/components/shared/banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { initiatives } from "@/lib/data";

export default function Page() {
  return (
    <Fragment>
      <Image
        src="/images/banners/our-initiatives.png"
        alt="banner"
        width={10}
        height={10}
      />
      <Banner image="/images/banners/our-initiatives.png">
        <h1 className="text-5xl font-semibold text-white">Our Initiatives</h1>
      </Banner>
      <section className="container" id="initiativesContainer">
        {initiatives.map((item) => (
          <InitiativeBlock key={item.name} {...item} />
        ))}
      </section>
      <section
        className="relative z-[2]"
        style={{
          background:
            "radial-gradient(74.29% 50.12% at 46.55% 50%, rgba(234, 2, 140, 0.89) 0%, #EA0256 100%)",
        }}
      >
        <div className="hidden lg:block -z-[2] absolute inset-y-0 lg:-left-52 xl:-left-44 2xl:-left-20">
          <Image
            src="/images/ankara.png"
            alt="ankara background"
            className="max-h-full"
            width={645}
            height={645}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 container pt-20 lg:pt-40">
          <div className="order-last lg:order-first">
            <Image
              src="/images/support.png"
              alt="classroom"
              width={674}
              height={522}
            />
          </div>
          <div className="text-white flex flex-col gap-7">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-4xl">
                Support Our Mission Today!
              </h2>
              <p className="lg:text-lg">
                Join our cause to transform structures around reproductive
                health and family well-being.
              </p>
            </div>
            <Link href="donate">
              <Button className="bg-white hover:bg-white py-2 px-4 w-fit text-primary">
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
