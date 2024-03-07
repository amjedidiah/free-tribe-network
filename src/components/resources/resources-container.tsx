import { Fragment } from "react";
import ProjectReport from "@/components/resources/project-report";
import ResourcesList from "@/components/resources/resources-list";
import { ResourcesIds } from "@/lib/constants";

export default function ResourcesContainer() {
  return (
    <Fragment>
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
}
