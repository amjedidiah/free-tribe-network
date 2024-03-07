"use client";
import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import Socials from "@/components/shared/socials";
import { Button } from "@/components/ui/button";
import { defaultNewsEventSection, volunteerNowLink } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useMemo } from "react";

export default function Page() {
  const [isUpcoming, setIsUpcoming] = useState(false);
  const initUrlSection = useMemo(
    () => (isUpcoming ? defaultNewsEventSection : "recent-activities"),
    [isUpcoming]
  );
  const imageUrl = useMemo(
    () =>
      isUpcoming
        ? "/images/activity-ankara-2.png"
        : "/images/activity-ankara-1.png",
    [isUpcoming]
  );

  return (
    <Fragment>
      <Banner image="/images/banners/activity-banner.png" />
      <section className="pt-10 flex flex-col gap-20">
        <article className="container flex flex-col gap-8">
          <div className="h3-gap mb-4">
            <h1 className="text-black font-semibold">
              Mobile Games: Top Monetization Patterns
            </h1>
            <h5 className="text-description font-medium">
              Nov 30, 6:00 - 9:00 AM
            </h5>
          </div>
          <p className="text-description">
            The Free Tribe Network is a nonprofit charity organization that
            promotes reproductive wellness, encourages health seeking and
            reporting behaviors, and provides support, to improve reproductive
            health and family well-being. Our activities and initiatives are in
            line with the Sustainable Development Goals (SDG) 3 (Good health and
            Wellbeing), 5 (Gender Equality), and 10 (Reduced Inequalities).{" "}
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
        <article className="container h1-gap">
          <h2>About this event</h2>
          <div
            className={cn(
              "flex flex-col gap-3 [&_h5]:font-semibold  [&_.note]:p-3  [&_.note]:my-3",
              {
                "[&_.note]:text-primary-800 [&_.note]:bg-primary-50":
                  isUpcoming,
                "[&_.note]:text-secondary-800 [&_.note]:bg-secondary-50":
                  !isUpcoming,
              }
            )}
          >
            <div>
              <h5>Date</h5>
              <p>Thursday, November 30th</p>
            </div>
            <div>
              <h5>Time</h5>
              <p>Start 18:00</p>
            </div>
            <div>
              <h5>Venue</h5>
              <p>Thurgauerstrasse 101B, 8152 Glattpark (Opfikon)</p>
            </div>
            <div className="note">
              <p>
                Meeting point is at Sunrise Shop Ambassador House inside. It is
                opposite of the reception.
              </p>
              <p>
                Afterwards, we can head over to the actual room named
                <em> St. Gallen</em>
              </p>
            </div>
            <h5>Schedule</h5>
            <p>18:00 - Open doors and networking</p>
            <p>
              18:15 - Talks by Teodora Dobre (UX Designer at Sunrise) - Mobile
              Games: Top Monetization Patterns.
            </p>
            <p>18:45 - Q&A panel with Teodora and FoF organizers</p>
            <p>
              19:00 - Networking: Connect with fellow designers, UI/UX
              enthusiasts, and Free Tribe aficionados in a relaxed and friendly
              atmosphere. Forge new friendships and collaborations that could
              shape the future of your design journey.
            </p>
            <div className="note">
              <p>
                RSVP now to secure your spot and be part of this event.
                <br />
                Don&apos;t miss the opportunity to meet the faces behind the
                avatars and celebrate our collective love for design and Free
                Tribe.
              </p>
              <p>
                There are 40 spots, so make sure to reserve your spot early{" "}
                <a href="https://www.meetup.com/friends-of-figma-zurich/events/297254362/">
                  here
                </a>
                .<br />
                Stay tuned for more details and updates as we approach the event
                date. Stay tuned for more details and updates as we approach the
                event date.
              </p>
            </div>
            <p>See you there, fellow Free Tribe enthusiasts!</p>
            <p>Best regards,</p>
            <p>FoF Zurich team</p>
            <p>
              P.S. Follow us on Instagram @fof_zurich for event updates,
              behind-the-scenes sneak peeks, and more.
              <br />
              Let&apos;s build the excitement together! #friendsoffigma
              #fofzurich
            </p>
          </div>
        </article>
      </section>
      <section className="py-10 lg:py-14">
        <article className="container h1-gap">
          <h2>More Activities</h2>
          <ActivityTabs
            initUrlSection={initUrlSection}
            isPrimary={isUpcoming}
          />
        </article>
      </section>
    </Fragment>
  );
}
