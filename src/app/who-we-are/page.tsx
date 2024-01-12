"use client";
import Image from "next/image";
import {
  Landing,
  Button,
  Card,
  Profile,
  ActivitiesCard,
  Feedbacks,
  Trustees,
} from "@/components";
import { cardData, profileData } from "@/components/card/constant";

export default function Who() {
  return (
    <main>
      <Landing />
      <section className="lg:h-160 flex flex-col justify-around lg:p-24 lg:my-56 p-12 xl:my-0">
        <h2>Our History</h2>
        <br />
        <div className="text-xl">
          <p>
            The Free Tribe Network is a nonprofit charity founded by Tosin
            Oluwagbemi-Jacob in 2022, in memory and inspiration of late Mrs.
            Titilope Oluwagbemi-Jacob (his beloved mother) who passed on due to
            complications and medical negligence following childbirth
          </p>
          <br />
          <p>
            The network aims to address prevailing issues affecting reproductive
            health and family health, and to provide sustainable solutions to
            these problems. It was registered with the Corporate Affairs
            Commission in 2023, and has since set to create a world where
            individuals have needed knowledge, resource, and support, for
            optimal reproductive health and family wellbeing.
          </p>
          <br />
          <p>
            Pioneers of the nonprofit were graduates students of the Department
            of Community Medicine, University College Hospital, University of
            Ibadan; medical professionals, and passionate individuals, who
            pulled resources to course a plan and structure for the network. To
            them, FREE is an acronym for Family and Reproductive Health
            Emancipation and Empowerment.
          </p>
          <br />
          <p>
            Within the same year of its registration, the organization took the
            forefront of Reproductive/family health advocacy with programs like
            ReproMatters, which have seen collaborations with Critical
            Healthcare Information Integration Network (CHIIN), Girls First
            Fund, Precious Little Ladies, and others from Harvard and Stanford
            University.
          </p>
          <br />
          <p>
            In 2023, the network launched its first pilot project in Ibadan; the
            Stand Against recycled Violence project, and a social service
            helpline for telephone support, access to information and referral
            to family health professionals
          </p>
          <br />
        </div>
        <div className="flex flex-row justify-center gap-6 justify-between lg:w-100 flex-wrap">
          {cardData.map((card, index) => (
            <Card
              clas={card.class}
              key={card.title + index}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ))}
        </div>
      </section>
      <div className="lg:px-24 lg:h-128 lg:my-12 overflow-hidden object-contain px-12 pb-12">
        <Image
          alt="history"
          src="/history.jpeg"
          height="400"
          width="1600"
          objectFit="fill"
          className="rounded"
        />
      </div>
      <section className="lg:px-24 px-12">
        <h2>What We Do</h2>
        <div className="container mx-auto py-8">
          <div className="grid gap-6 lg:grid-cols-6 lg:grid-rows-2">
            <ActivitiesCard
              title="Advocacy & Awareness campaigns"
              icon="/streamline_target.svg"
              clas="text-slate-500 bg-slate-50 lg:col-start-1 lg:col-end-4"
            />
            <ActivitiesCard
              title="Community projects"
              icon="/project.svg"
              clas="text-slate-500 bg-slate-50 lg:col-start-4 lg:col-end-7"
            />
            <ActivitiesCard
              title="Policcy & Reasearch activities"
              icon="/policy.svg"
              clas="text-pink-500 bg-pink-50 lg:col-start-1 lg:col-end-3 lg:row-start-2"
            />
            <ActivitiesCard
              title="Social service helpline"
              icon="/social.svg"
              clas="text-slate-500 bg-slate-50  lg:col-start-3 lg:col-end-5 lg:row-start-2"
            />
            <ActivitiesCard
              title="Training programs"
              icon="/training.svg"
              clas="text-pink-500 bg-pink-50 lg:col-start-5 lg:col-end-7 lg:row-start-2"
            />
          </div>
        </div>
        <Button title="View Activities" />
      </section>
      <section className="flex flex-col lg:px-24 justify-between lg:justify-between sm:p-12">
        <div className="flex flex-row justify-between items-center p-12 lg:px-0">
          <h2>Board of Trustees</h2>
          <span className="w-28 flex flex-row justify-around">
            <Image
              alt="right-arrow"
              src="/right-arrow.svg"
              width="30"
              height="30"
            />
            <Image
              alt="left-arrow"
              src="/left-arrow.svg"
              width="30"
              height="30"
            />
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-around lg:justify-between items-center">
          <div className="flex flex-row items-center justify-around h-96 sm:w-96 w-4/5 p-0">
            <Image
              alt="right-arrow"
              src="/right-arrow.svg"
              width="30"
              height="30"
            />
            <div className="lg:h-68 lg:w-80 p-4 bg-pink-500">
              <Image
                alt="trustee"
                src="/chairman.png"
                height="300"
                width="300"
              />
            </div>
            <Image
              alt="left-arrow"
              src="/left-arrow.svg"
              width="30"
              height="30"
            />
          </div>
          <div className="lg:h-100 lg:w-140 flex flex-col justify-between bg-[#62013B] p-12 text-white w-full h-3/5">
            <div>
              <h6>Dr Adebayo, Ayodeji Mattew</h6>
              <p>Chairman, BOT</p>
            </div>
            <p className="h-4/5 sm:h-3/5">
              A public health physician, a seasoned researcher, and a senior
              lecturer in the Department of Community Medicine, University of
              Ibadan, Nigeria. He has published over 85 academic papers, and
              presented at several international and national conferences. He is
              a recipient of several grants, and was Principal Investigator for
              a World Bank funded project, targeting couples in Ibadan,
            </p>
          </div>
        </div>
      </section>
      <section className="lg:p-24 lg:h-168 flex flex-col justify-around items-center lg:my-80 xl:my-0 p-12">
        <h2 className="mb-12">The Work Family</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-3 gap-2">
          {profileData.map((profile, index) => (
            <Profile
              key={profile.title + index}
              title={profile.title}
              dp={profile.dp}
              role={profile.role}
            />
          ))}
        </div>
      </section>
      <section className="bg-gray-500 lg:h-132 flex flex-col justify-center overflow-hidden">
        <div className="flex flex-row justify-between items-center lg:pl-24 lg:py-24 relative sm:pl-12 sm:py-12 p-12 sm:pr-0">
          <div className="text-white flex flex-col justify-around lg:h-96 sm:w-136 md:h-96 h-132 w-140">
            <h2>Work With Us</h2>
            <p>
              At Free Tribe Network, our staff and volunteers are driven for
              positive world change. Our web of experts, interns, and
              enthusiasts give their best to ensure health, equity, and social
              justice for all. <br />
              We seek individuals with talent, motivation, and passion to become
              part of our team. Bring your dream to life and inspire others
              today.
            </p>
            <div className="w-full sm:w-96 flex flex-row justify-between">
              <Button title="Volunteer Now" />
              <Button
                title="Current Vacancies"
                className="bg-transparent border border border-white "
              />
            </div>
          </div>
          <div className="absolute xl:right-24 xl:top-96 md:top-[32rem] right-0 top-[40rem]">
            <Image
              alt="work-with-us"
              src="/work-us.png"
              height="500"
              width="500"
            />
          </div>
          <div className="sm:overflow-hidden hidden sm:block">
            <Image
              alt="work-background"
              src="/work-bg.png"
              height="600"
              width="350"
            />
          </div>
        </div>
      </section>
      <Feedbacks />
      <div className="flex flex-col justify-around items-center sm:h-56 w-full font-bold h-96">
        <h5>Our Partner</h5>
        <div className="flex flex-col sm:flex-row justify-around items-center lg:w-4/5 md:w-screen w-full h-4/5">
          <Image alt="asido" src="/asido.png" height="100" width="100" />
          <Image alt="precious" src="/precious.png" height="100" width="100" />
          <Image alt="critical" src="/critical.png" height="100" width="220" />
        </div>
      </div>
    </main>
  );
}
