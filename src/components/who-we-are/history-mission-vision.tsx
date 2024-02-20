import { visionMissionData } from "@/lib/data";
import VisionMissionCard from "@/components/who-we-are/vision-mission-card";
import Image from "next/image";
import Link from "next/link";

export default function HistoryMissionVision() {
  return (
    <section className="py-10 lg:pt-28">
      <div className="container flex flex-col gap-8">
        <article className="flex flex-col gap-7" id="our-history">
          <h2 className="text-black text-3xl lg:text-5xl font-semibold">
            Our History
          </h2>
          <div className="text-description flex flex-col gap-4 [&_a]:font-bold [&_a]:underline">
            <p>
              The Free Tribe Network is a non-profit charity founded by Tosin
              Oluwagbemi-Jacob in 2022, in memory and inspiration of late Mrs.
              Titilope Oluwagbemi-Jacob (his beloved mother) who passed on due
              to complications and medical negligence following childbirth.
            </p>
            <p>
              The network aims to address prevailing issues affecting
              reproductive health and family health, and to provide sustainable
              solutions to these problems. It was registered with the Corporate
              Affairs Commission in 2023, and has since set to create a world
              where individuals have needed knowledge, resource, and support,
              for optimal reproductive health and family well-being.
            </p>
            <p>
              Pioneers of the non-profit were graduates students of the
              Department of Community Medicine, University College Hospital,
              University of Ibadan; medical professionals, and passionate
              individuals, who pulled resources to course a plan and structure
              for the network. To them, FREE is an acronym for Family and
              Reproductive Health Emancipation and Empowerment.
            </p>
            <p>
              Within the same year of its registration, the organization took
              the forefront of Reproductive/family health advocacy with programs
              like{" "}
              <Link href="/our-initiatives?section=repromatters">
                ReproMatters
              </Link>
              , which have seen collaborations with Critical Healthcare
              Information Integration Network (CHIIN), Girls First Fund,
              Precious Little Ladies, and others from Harvard and Stanford
              University.
            </p>
            <p>
              In 2023, the network launched its first pilot project in Ibadan;
              the Stand Against recycled Violence project, and a social service
              helpline for telephone support, access to information and referral
              to family health professionals.
            </p>
          </div>
        </article>
        <article
          className="grid sm:grid-cols-3 gap-8 lg:gap-16"
          id="mission-vision"
        >
          {visionMissionData.map((card, index) => (
            <VisionMissionCard {...card} key={card.title + index} />
          ))}
        </article>
        <article className="relative h-96 w-full rounded">
          <Image
            src="/images/vision-mission.jpeg"
            alt="history"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="rounded"
          />
        </article>
      </div>
    </section>
  );
}
