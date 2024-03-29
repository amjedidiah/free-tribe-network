"use client";
import { visionMissionData } from "@/lib/data";
import VisionMissionCard from "@/components/who-we-are/vision-mission-card";
import Image from "next/image";
import Link from "next/link";
import useScrollToSection from "@/hooks/use-scroll-to-section";

export default function HistoryMissionVision() {
  useScrollToSection();

  return (
    <section className="py-10 lg:pt-28">
      <div className="container flex flex-col gap-8">
        <article className="h2-gap" id="our-history">
          <h2 className="text-black">Our History</h2>
          <div className="text-description flex flex-col gap-3 [&_a]:underline">
            <p>
              The Free Tribe Network is a non-profit charity founded by Tosin
              Oluwagbemi-Jacob in 2022, in memory and inspiration of late Mrs.
              Titilope Oluwagbemi-Jacob (his beloved mother) who passed on due
              to complications and medical negligence following childbirth.
            </p>
            <Image
              src="/images/inspiration.png"
              alt="history"
              width={1920}
              height={1080}
              className="rounded shadow-ls"
            />
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
              the forefront of{" "}
              <Link href="/our-initiatives?section=rfh-advocacy">
                Reproductive/family health advocacy
              </Link>{" "}
              with programs like{" "}
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
      </div>
    </section>
  );
}
