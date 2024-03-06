import WhatWeDoCard from "@/components/who-we-are/what-we-do-card";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="py-10 lg:py-14" id="what-we-do">
      <article className="container grid gap-8">
        <h2 className="text-black">What We Do</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          <WhatWeDoCard
            title="Advocacy & Awareness campaigns"
            icon="/images/advocacy.svg"
            className="bg-secondary-50 text-secondary-500 lg:col-start-1 lg:col-end-4"
          />
          <WhatWeDoCard
            title="Community projects"
            icon="/images/community-projects.svg"
            className="bg-secondary-50 text-secondary-500 lg:col-start-4 lg:col-end-7"
          />
          <WhatWeDoCard
            title="Policy & Research activities"
            icon="/images/policy.svg"
            className="bg-primary-50 text-primary-500 lg:col-start-1 lg:col-end-3 lg:row-start-2"
          />
          <WhatWeDoCard
            title="Social service helpline"
            icon="/images/social-service.svg"
            className="bg-secondary-50 text-secondary-500  lg:col-start-3 lg:col-end-5 lg:row-start-2"
          />
          <WhatWeDoCard
            title="Training programs"
            icon="/images/training.svg"
            className="bg-primary-50 text-primary-500 lg:col-start-5 lg:col-end-7 lg:row-start-2"
          />
        </div>
        <div className=" [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem] [&_a]:shadow-md">
          <Link href="/news-events" className=" bg-primary-400 text-white">
            View Activities
          </Link>
        </div>
      </article>
    </section>
  );
}
