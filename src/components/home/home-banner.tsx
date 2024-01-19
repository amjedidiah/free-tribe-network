"use client";
import Link from "next/link";
import Banner from "@/components/shared/banner";
import { Link as ScrollLink } from "react-scroll";

export default function HomeBanner() {
  return (
    <Banner
      image="/images/banners/home-banner.png"
      title="Inspiring actions for sustained reproductive health and family well-being"
      picturePosition="center right"
      wrapperClassName="max-xl:bg-[rgba(5,83,118,0.45)]"
    >
      <div className="flex flex-col gap-6 mt-6">
        <p className="max-w-[41rem]">
          At the Free Tribe Network, we promote reproductive wellness, and
          family well-being. We provide charitable services in the forms of
          programs, projects and research, to translate knowledge into
          perception, and perceptions into actions and behaviours.
        </p>

        <div className="flex items-center gap-6 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem] [&_a]:shadow-md">
          <Link
            href="/donate"
            className=" bg-primary-400 text-white font-semibold"
          >
            Support
          </Link>
          <ScrollLink
            to="mailing-list"
            smooth
            className="border border-white cursor-pointer"
          >
            Join our mailing list
          </ScrollLink>
        </div>
      </div>
    </Banner>
  );
}
