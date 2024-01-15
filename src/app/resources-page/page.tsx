import React from "react";
import Image from "next/image";
import { Project, Card } from "@/components";

const Resources = () => {
  return (
    <div>
      <div className="lg:h-1/2 lg:h-screen h-132 overflow-hidden">
        <Image
          alt="resources"
          src="/images/resource.png"
          width="1600"
          height="500"
          className="h-132 sm:h-full object-fill"
        />
      </div>
      <section className="lg:p-24 container mx-auto py-12">
        <h2>Project/Activity Reports</h2>
        <div className="grid gap-6 items-center justify-center lg:grid-cols-6 lg:grid-rows-2 lg:pt-24">
          <Project
            title="6 min read"
            className="xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-4"
          />
          <Project
            title="7 min read"
            className="xl:col-start-3 xl:col-end-5 lg:col-start-4 lg:col-end-7"
          />
          <Project
            title="7 min read"
            className="xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:col-end-4"
          />
          <Project
            title="8 min read"
            className="xl:col-start-1 xl:col-end-3 lg:col-start-4 lg:col-end-7"
          />
          <Project
            title="9 min read"
            className="xl:col-start-3 xl:col-end-5 lg:col-start-1 lg:col-end-4"
          />
          <Project
            title="10 min read"
            className="xl:col-start-5 xl:col-end-7 lg:col-start-4 lg:col-end-7"
          />
        </div>
      </section>
      <div className="relative overflow-hidden">
        <Image
          alt="blue-top"
          src="/images/blue-top.png"
          height="50"
          width="1600"
        />
        <Image
          alt="blue-bottom"
          src="/images/blue-bottom.png"
          height="50"
          width="1600"
          className="absolute top-0"
        />
      </div>
      <section className="bg-[#E6EFF3]">
        <div className="container mx-auto lg:py-24 py-12 lg:text-start">
          <h2>Bulletins</h2>
          <div className="flex gap-12 pt-12 flex-wrap justify-center lg:overflow-x-scroll snap-x ">
            <Card
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              buttonColor="bg-[#065B82]"
              className="max-w-96"
            />
            <Card
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              buttonColor="bg-[#065B82]"
              className="max-w-96"
            />
            <Card
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              buttonColor="bg-[#065B82]"
              className="max-w-96"
            />
            <Card
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              buttonColor="bg-[#065B82]"
              className="max-w-96"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <h2>Research</h2>
        <div className="grid gap-12 lg:grid-cols-6 xl:grid-rows-2 lg:grid-rows-3 pt-12 place-content-center m-0">
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-4"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-3 xl:col-end-5 lg:col-start-4 lg:col-end-7"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:col-end-4"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-1 xl:col-end-3 lg:col-start-4 lg:col-end-7"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-3 xl:col-end-5 lg:col-start-1 lg:col-end-4"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 xl:col-start-5 xl:col-end-7 lg:col-start-4 lg:col-end-7"
            buttonColor="bg-pink-500"
          />
        </div>
      </section>
      <div className="overflow-hidden h-36">
        <Image
          alt="blue-top"
          src="/images/pink-bottom.png"
          height="50"
          width="1600"
          className="h-12 translate-y-12 rotate-3"
        />
        <Image
          alt="blue-bottom"
          src="/images/pink-top.png"
          height="50"
          width="1600"
          className="translate-x-0 rotate-[-3deg] h-12"
        />
      </div>
      <section className="bg-[#E6EFF3]">
        <div className="container mx-auto lg:py-24">
          <h2>Annual Report</h2>
          <div className="grid gap-6 items-center justify-center lg:grid-cols-6 lg:grid-rows-2 lg:pt-24">
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-4"
              buttonColor="bg-[#387C9B]"
            />
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-3 xl:col-end-5 lg:col-start-4 lg:col-end-7"
              buttonColor="bg-[#387C9B]"
            />
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:col-end-4"
              buttonColor="bg-[#387C9B]"
            />
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-1 xl:col-end-3 lg:col-start-4 lg:col-end-7"
              buttonColor="bg-[#387C9B]"
            />
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-3 xl:col-end-5 lg:col-start-1 lg:col-end-4"
              buttonColor="bg-[#387C9B]"
            />
            <Card
              description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
              showDescription={true}
              title="Design Handoff and Developer Handover"
              supportText="Nov 24, 2023"
              className="h-[30rem] border-[#B2CCD8] border-4 xl:col-start-5 xl:col-end-7 lg:col-start-4 lg:col-end-7"
              buttonColor="bg-[#387C9B]"
            />
          </div>
        </div>
      </section>
      <div className="py-8">
        <Image
          src="/images/blue-straight.png"
          alt="blue-straight"
          width="1600"
          height="200"
        />
      </div>
      <section className="container lg:py-24">
        <h2>Special Publications</h2>
        <div className="flex gap-12 pt-12 flex-wrap justify-center lg:overflow-x-scroll snap-x">
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 max-w-96"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 max-w-96"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 max-w-96"
            buttonColor="bg-pink-500"
          />
          <Card
            description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
            showDescription={true}
            title="Design Handoff and Developer Handover"
            supportText="Nov 24, 2023"
            className="h-[30rem] border-pink-300 border-4 max-w-96"
            buttonColor="bg-pink-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Resources;
