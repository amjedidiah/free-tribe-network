import { cn } from "@/lib/utils";

type Props = {
  isUpcoming: boolean;
};

export default function ActivityContentAbout({ isUpcoming }: Props) {
  return (
    <article className="container h1-gap">
      <h2>About this event</h2>
      <div
        className={cn(
          "flex flex-col gap-3 [&_h5]:font-semibold  [&_.note]:p-3  [&_.note]:my-3",
          {
            "[&_.note]:text-primary-800 [&_.note]:bg-primary-50": isUpcoming,
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
          19:00 - Networking: Connect with fellow designers, UI/UX enthusiasts,
          and Free Tribe aficionados in a relaxed and friendly atmosphere. Forge
          new friendships and collaborations that could shape the future of your
          design journey.
        </p>
        <div className="note">
          <p>
            RSVP now to secure your spot and be part of this event.
            <br />
            Don&apos;t miss the opportunity to meet the faces behind the avatars
            and celebrate our collective love for design and Free Tribe.
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
          Let&apos;s build the excitement together! #friendsoffigma #fofzurich
        </p>
      </div>
    </article>
  );
}
