import { Fragment } from "react";
import ContentImage from "@/components/shared/content-image";
import { HOURLY_REVALIDATION } from "@/lib/constants";
import ProjectReport from "@/components/resources/project-report";
import ResourcesList from "@/components/resources/resources-list";
import { ResourcesIds } from "@/lib/types";
import Banner from "@/components/shared/banner";

export const revalidate = HOURLY_REVALIDATION;

const Resources = () => {
  return (
    <Fragment>
      <ContentImage
        title="resources-banner"
        width={2880}
        height={1246}
        className="mt-20 min-w-full 2xl:hidden"
      />
      <Banner imageTitle="resources-banner" className="max-2xl:hidden" />
      <ProjectReport />
      <ResourcesList
        className="lg:py-16"
        hasOverflow
        isSecondary
        resourceId={ResourcesIds.Bulletins}
        hideDescription
      />
      <ResourcesList
        className="lg:py-24"
        hasBorder
        resourceId={ResourcesIds.Researches}
      />
      <div className="border-ankara-1 border-b-[20px] relative top-7 rotate-[-3deg]" />
      <div className="border-ankara-1 border-b-[20px] relative top-2 rotate-[3deg]" />
      <ResourcesList
        className="lg:py-20 border-ankara-4 border-b-[20px]"
        hasBorder
        isSecondary
        resourceId={ResourcesIds.AnnualReports}
      />
      <ResourcesList
        className="lg:py-16"
        hasBorder
        hasOverflow
        resourceId={ResourcesIds.SpecialPublications}
      />
    </Fragment>
  );
};

export default Resources;
