import Image from "next/image";
import InitiativeBlock from "./components/initiative-block";

const data = [
  {
    title: "ReproMatters",
    subText:
      "A bi-monthly program utilizing real life stories, medical knowledge, public health expertise, and the wide reach of the social media space, to discuss important issues affecting reproductive health and family wellbeing. Topics covered will center around women’s health, men’s health, children and adolescent health and wellbeing.",
    image: [
      { src: "/images/sample.png", alt: "sample alt" },
      { src: "/images/sample.png", alt: "sample alt" },
      { src: "/images/sample.png", alt: "sample alt" },
      { src: "/images/sample.png", alt: "sample alt" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <div className="container py-6 lg:py-12">
        <div className="space-y-4 lg:space-y-8">
          <div className="space-y-2 lg:space-y-3">
            <h1 className="font-semibold text-3xl lg:text-5xl">
              Stand Against Recycled Violence (STAR) project
            </h1>
            <p className="tracking-wide">
              A public health project that seeks to capture and reduce the witnessing of
              interparental violence, and the intergenerational transmission of violence to
              adolescents. The project aims to improve institutional supportive structures within
              public secondary schools, to discourage the acceptance or use of violence in future
              relationships. It combines a powerful blend of research and public health programs to
              address reproductive health and family wellbeing.
            </p>
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">Identifying the Issue!</h2>
            <p className="tracking-wide">
              We observed that Intimate Partner Violence (Interparental Violence) had a significant
              effect on the physical, mental, and social well-being of children and adolescents.
              Children witnessing these violent behaviours were prone to exhibit difficulties in
              social interactions, endured emotional strain, and other psychological challenges,
              building into several negative outcomes such as bullying, unhealthy relationships, low
              self-esteem, substance abuse, and even criminal behaviours, with effects persisting
              through adulthood.{" "}
            </p>
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">Our Approach! </h2>
            <p className="tracking-wide">
              The Stand Against Recycled Violence (STAR) Project: an initiative to counter the
              intergenerational recycling of violence. We combined a powerful blend of research and
              public health programs, to address the incidence of interparental violence, bullying
              (peer violence), and violence justification. The strategies of the STAR project help
              us to improve institutional supportive structures within secondary schools, and to
              discourage the acceptance and use of violence in future relationships. Offerings:
            </p>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>Baseline survey</li>
            <li>Teacher training</li>
            <li>Student training</li>
            <li>Free Tribe Institutional Club</li>
            <li>Institutional Supervising committee</li>
            <li>Monitoring & Evaluation</li>
          </ul>
          <span>View Activity</span>
          <Image
            className="w-full object-cover"
            src="/images/sample.png"
            alt="STAR project"
            height={400}
            width={1200}
          />
        </div>
        <div className="space-y-14 lg:space-y-24">
          <InitiativeBlock title={data[0].title} subText={data[0].subText} image={data[0].image} />
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">ReproMatters</h2>
            <p className="tracking-wide">
              A bi-monthly program utilizing real life stories, medical knowledge, public health
              expertise, and the wide reach of the social media space, to discuss important issues
              affecting reproductive health and family wellbeing. Topics covered will center around
              women’s health, men’s health, children and adolescent health and wellbeing.
            </p>
            <span>View Activity</span>
            <Image
              className="w-full object-cover"
              src="/images/sample.png"
              alt="STAR project"
              height={400}
              width={1200}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">Free Tribe Boost-Camp</h2>
            <p className="tracking-wide">
              A bi-monthly capacity building program for staff and volunteers of the Free Tribe
              Network, set to improve corporate work skills, teach industry-relevant skills, and
              foster bonding amongst members of the Free Tribe Network.
            </p>
            <span>View Activity</span>
            <Image
              className="w-full object-cover"
              src="/images/sample.png"
              alt="STAR project"
              height={400}
              width={1200}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">Free Tribe Helpline</h2>
            <p className="tracking-wide">
              A social service for telephone support, access to information, advice, informed
              interventions, and referral to reproductive and family health professionals.
            </p>
            <span>View Activity</span>
            <Image
              className="w-full object-cover"
              src="/images/sample.png"
              alt="STAR project"
              height={400}
              width={1200}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">Free Tribe Clubs</h2>
            <p className="tracking-wide">
              These are safe spaces set to promote open conversations, improve social support,
              enhance monitoring and evaluation, and improve self-led initiatives and
              re-intervention tactics, to ensure sustainable improvements in reproductive and family
              health outcomes.
            </p>
            <span>View Activity</span>
            <Image
              className="w-full object-cover"
              src="/images/sample.png"
              alt="STAR project"
              height={400}
              width={1200}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <h2 className="font-semibold text-xl lg:text-3xl">
              Reproductive and Family health advocacy
            </h2>
            <p className="tracking-wide">
              This includes rallies, campaigns, weekly advocacy messages (#TeachTuesday and
              #FactFriday), and media programs to promote and inspire positive health behaviours.
            </p>
            <span>View Activity</span>
            <Image
              className="w-full object-cover"
              src="/images/sample.png"
              alt="STAR project"
              height={400}
              width={1200}
            />
          </div>
        </div>
      </div>
      <div
        className="relative h-[490px] sm:h-[700px] lg:h-[600px] -z-20"
        style={{
          background:
            "radial-gradient(74.29% 50.12% at 46.55% 50%, rgba(234, 2, 140, 0.89) 0%, #EA0256 100%)",
        }}
      >
        <div className="hidden lg:block -z-10 absolute inset-y-0 h-full -left-80">
          <Image
            src="/images/ankara.png"
            alt="ankara background"
            className="max-h-full"
            width={645}
            height={645}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 container h-full">
          <div className="self-end order-last lg:order-first">
            <Image src="/images/support.png" alt="classroom" width={650} height={520} />
          </div>
          <div className="text-white self-center space-y-4 lg:space-y-8">
            <h2 className="text-3xl lg:text-5xl">Support Our Mission Today!</h2>
            <p className="lg:text-lg">
              Join our cause to transform structures around reproductive health and family
              wellbeing.
            </p>
            <button className="bg-white p-2 text-black">Donate</button>
          </div>
        </div>
      </div>
    </main>
  );
}
