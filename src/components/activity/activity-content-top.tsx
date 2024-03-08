"use client";
import { cn } from "@/lib/utils";
import Socials from "@/components/shared/socials";
import Link from "next/link";
import { volunteerNowLink } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMemo } from "react";

type Props = {
  isUpcoming: boolean;
};

export default function ActivityContentTop({ isUpcoming }: Props) {
  const imageUrl = useMemo(
    () =>
      isUpcoming
        ? "/images/activity-ankara-2.png"
        : "/images/activity-ankara-1.png",
    [isUpcoming]
  );
  return (
    <article className="container flex flex-col gap-8">
      <div className="h3-gap mb-4">
        <h1 className="text-black font-semibold">
          Mobile Games: Top Monetization Patterns
        </h1>
        <h5 className="text-description font-medium">Nov 30, 6:00 - 9:00 AM</h5>
      </div>
      <p className="text-description">
        The Free Tribe Network is a nonprofit charity organization that promotes
        reproductive wellness, encourages health seeking and reporting
        behaviors, and provides support, to improve reproductive health and
        family well-being. Our activities and initiatives are in line with the
        Sustainable Development Goals (SDG) 3 (Good health and Wellbeing), 5
        (Gender Equality), and 10 (Reduced Inequalities).{" "}
      </p>
      <Socials
        className={cn(" mb-4", {
          "[&_*]:text-primary-500": isUpcoming,
          "[&_*]:text-secondary-500": !isUpcoming,
        })}
      />
      <div className="h-72 relative">
        <Image src={imageUrl} alt="Ankara activity" fill sizes="100%" />
        {isUpcoming && (
          <div className="absolute left-0 right-0 h-full flex items-center justify-center gap-4 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem]">
            <Link href="/donate" className=" text-primary-400 bg-white">
              Donate
            </Link>
            <a href={volunteerNowLink} target="_blank">
              <Button className="bg-transparent hover:bg-transparent border-white border-2 py-2 px-4 w-fit text-white">
                Volunteer Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
