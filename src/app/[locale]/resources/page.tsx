import { Fragment } from "react";
import ContentImage from "@/components/shared/content-image";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import ProjectReport from "@/components/resources/project-report";
import ResourcesList from "@/components/resources/resources-list";
import { PropsWithLocaleParam } from "@/lib/types";
import Banner from "@/components/shared/banner";
import { unstable_setRequestLocale } from "next-intl/server";
import { getKeyResource } from "@/lib/utils";
import { getMetadata } from "@/lib/actions/metadata";
import ScrollToSection from "@/components/shared/scroll-to-section";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://freetribenetwork.com/wp-content/uploads/2024/03/resource-banner.webp",
    "Layout.metaData.resources"
  );

export default function Resources({
  params: { locale },
}: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  const keyResource = getKeyResource(locale);

  return (
    <Fragment>
      <ContentImage
        title="resources-banner"
        width={2880}
        height={1246}
        className="mt-32 min-w-full 2xl:hidden"
        priority
      />
      <Banner imageTitle="resources-banner" className="max-2xl:hidden" />
      <ProjectReport />
      <ResourcesList
        className="lg:py-16"
        hasOverflow
        isSecondary
        resourceId={keyResource.Bulletins}
        hideDescription
      />
      <ResourcesList
        className="lg:py-24"
        hasBorder
        resourceId={keyResource.Researches}
      />
      <div className="border-ankara-1 border-b-[20px] relative top-7 rotate-[-3deg]" />
      <div className="border-ankara-1 border-b-[20px] relative top-2 rotate-[3deg]" />
      <ResourcesList
        className="lg:py-20 border-ankara-4 border-b-[20px]"
        hasBorder
        isSecondary
        resourceId={keyResource.AnnualReports}
      />
      <ResourcesList
        className="lg:py-16"
        hasBorder
        hasOverflow
        resourceId={keyResource.SpecialPublications}
      />
      <ScrollToSection shouldScroll={true} />
    </Fragment>
  );
}
