import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentVancanciesLink, volunteerNowLink } from "@/lib/data";

export default function WorkWithUs() {
  return (
    <section className="relative z-[2] bg-secondary-500" id="work-with-us">
      <div className="hidden lg:block -z-[2] absolute inset-y-0 lg:-right-52 xl:-right-44 2xl:-right-20 h-full w-[calc(100vw/2)] xl:w-[calc(100vw/2-150px)] 2xl:w-[calc(100vw/2-300px)]">
        <Image
          src="/images/ankaras/ankara-3.png"
          alt="ankara background"
          className="max-h-full"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100%"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 container pt-20 lg:pt-0">
        <div className="order-last lg:pt-40 max-lg:max-h-96 overflow-hidden">
          <Image
            src="/images/work-with-us.png"
            alt="classroom"
            width={674}
            height={522}
            className="w-full max-w-full overflow-hidden"
          />
        </div>
        <div className="text-white flex flex-col gap-7 justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl">Work With Us!</h2>
            <p className="lg:text-lg">
              At Free Tribe Network, our staff and volunteers are driven for
              positive world change. Our web of experts, interns, and
              enthusiasts give their best to ensure health, equity, and social
              justice for all.We seek individuals with talent, motivation, and
              passion to become part of our team. Bring your dream to life and
              inspire others today.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href={volunteerNowLink}>
              <Button className="bg-primary-500 hover:bg-primary-500 py-2 px-4 w-fit text-white">
                Volunteer Now
              </Button>
            </Link>

            <Link href={currentVancanciesLink}>
              <Button className="bg-transparent hover:bg-transparent py-2 px-4 w-fit text-white border border-white">
                Current Vacancies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
