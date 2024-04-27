import ContentImage from "@/components/shared/content-image";
import Image from "next/image";

export default function HomeOurVision() {
  return (
    <section className="bg-secondary-900 py-10">
      <article className="container grid lg:grid-cols-[1fr,625px] gap-10 items-center">
        <div className="h2-gap">
          <h2 className="text-secondary-50">Our Vision</h2>
          <p className="text-secondary-100 max-w-[35rem]">
            To build a global community of people making lifelong decisions, to
            improve their reproductive and family well-being, in line with the
            2030 agenda for sustainable development.
          </p>
        </div>

        <div className="grid sm:max-lg:grid-cols-3 lg:grid-cols-2 [&>div]:pt-4 [&>div]:px-4">
          <div className="flex flex-col max-lg:justify-between lg:flex-row lg:items-center gap-4 bg-[#f69fd2] lg:col-span-2">
            <div className="">
              <span className="bg-primary-900 py-[2px] px-1 text-primary-100">
                SDG 5
              </span>
              <h4 className="text-primary-800 uppercase lg:max-w-[11.625rem]">
                gender equality
              </h4>
            </div>
            <div className="flex lg:flex-1 justify-end">
              <ContentImage title="sdg-5" width={420} height={411} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 bg-[#7daabe]">
            <div className="">
              <span className="bg-secondary-800 py-[2px] px-1 text-secondary-100 ">
                SDG 10
              </span>
              <h4 className="text-secondary-800 uppercase">
                reduced inequalities
              </h4>
            </div>
            <div className="flex justify-end">
              <ContentImage title="sdg-10" width={309} height={241} />
            </div>
          </div>
          <div className="grid items-center gap-4 bg-[#04436e]">
            <div className="">
              <span className="bg-secondary-900 py-[2px] px-1 text-secondary-100 ">
                SDG 3
              </span>
              <h4 className="text-secondary-100 uppercase">
                good health and well being
              </h4>
            </div>
            <div className="flex justify-end">
              <Image
                src="/images/sdg/sdg-3.svg"
                alt="sdg-3"
                width={309}
                height={241}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
