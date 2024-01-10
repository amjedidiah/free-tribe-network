import Image from "next/image";

export default function Page() {
  return (
    <main className="container py-6 lg:py-12">
      <section className="space-y-8 lg:space-y-14">
        <div className="space-y-4 lg:space-y-8">
          <div className="space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">
              Mobile Games: Top Monetization Patterns
            </h1>
            <p>Nov 30, 6:00 - 9:00 AM</p>
          </div>
          <p className="tracking-wide">
            The Free Tribe Network is a nonprofit charity organization that promotes reproductive
            wellness, encourages health seeking and reporting behaviors, and provides support, to
            improve reproductive health and family well-being. Our activities and initiatives are in
            line with the Sustainable Development Goals (SDG) 3 (Good health and Wellbeing), 5
            (Gender Equality), and 10 (Reduced Inequalities).
          </p>
          <div className="flex gap-4">
            <Image src="/icons/twitter-blue.svg" alt="Twitter Icon" width={24} height={24} />
            <Image src="/icons/facebook-blue.svg" alt="Twitter Icon" width={24} height={24} />
            <Image src="/icons/linkedIn-blue.svg" alt="Twitter Icon" width={24} height={24} />
            <Image src="/icons/insta-blue.svg" alt="Twitter Icon" width={24} height={24} />
          </div>
        </div>
        <Image
          src="/images/activity-ankara.png"
          alt="Twitter Icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "" }}
          className="h-44 md:h-auto"
        />
        <div className="space-y-2 lg:space-y-8">
          <div className="space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">About this event</h1>
          </div>
          <div className="tracking-wide space-y-4">
            <p>Date: Thursday, November 30th</p>
            <p>Time: Start 18:00</p>
            <p>Venue: Thurgauerstrasse 101B, 8152 Glattpark (Opfikon)</p>
            <p>
              ** Meeting point is at Sunrise Shop Ambassador House inside. It is opposite of the
              reception. Afterwards, we can head over to the actual room named &quot;St.
              Gallen&quot; 
            </p>
            <p>### Schedule</p>
            <p>18:00 - Open doors and networking</p>
            <p>
              18:15 - Talks by Teodora Dobre (UX Designer at Sunrise) - Mobile Games: Top
              Monetization Patterns.
            </p>
            <p>18:45 - Q&A panel with Teodora and FoF organizers</p>
            <p>
              19:00 - Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma
              aficionados in a relaxed and friendly atmosphere. Forge new friendships and
              collaborations that could shape the future of your design journey.
            </p>
            <p>
              RSVP now to secure your spot and be part of this event. Don&apos;t miss the
              opportunity to meet the faces behind the avatars and celebrate our collective love for
              design and Figma.
            </p>
            <p>
              There are 40 spots, so make sure to reserve your spot early here
              (https://www.meetup.com/friends-of-figma-zurich/events/297254362/). Stay tuned for
              more details and updates as we approach the event date.. Stay tuned for more details
              and updates as we approach the event date.
            </p>
            <p>See you there, fellow Figma enthusiasts!</p>
            <p>Best regards,</p>
            <p>FoF Zurich team</p>
            <p>
              P.S. Follow us on Instagram @fof_zurich for event updates, behind-the-scenes sneak
              peeks, and more. Let&apos;s build the excitement together! #friendsoffigma #fofzurich
            </p>
          </div>
        </div>
        <div className="space-y-2 lg:space-y-8">
          <div className="space-y-2">
            <h1 className="font-semibold text-3xl lg:text-5xl">More Activities</h1>
          </div>
          {/* Tab component goes here */}
        </div>
      </section>
    </main>
  );
}
