"use client";
import { Fragment } from "react";
import ProjectReport from "./project-report";
import ResourcesList from "./resources-list";
import { GET_RESOURCES_CATEGORIES_DATA } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { Resource } from "./resources-card";

const extractContents = (item: any) =>
  item.node.posts.edges?.map(
    ({
      node: { excerpt, id, title, modifiedGmt, featuredImage, content },
    }: any) => ({
      id,
      title,
      description: excerpt,
      uploadDate: new Date(modifiedGmt).toDateString(),
      src: featuredImage?.node?.link,
      url: content,
    })
  );

export default function ResourcesContainer() {
  const { loading, error, data } = useQuery(GET_RESOURCES_CATEGORIES_DATA, {
    variables: {
      databaseId: "dGVybToz",
    },
  });
  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  const cleanedData = data.category.children?.edges?.map(
    extractContents
  ) as Resource[][];

  return (
    <Fragment>
      <ProjectReport />
      <ResourcesList
        title="Bulletins"
        className="lg:py-16"
        hasOverflow
        isSecondary
        resourceList={cleanedData?.[1].map(({ description, ...rest }) => rest)}
      />
      <ResourcesList
        className="lg:py-24"
        title="Researches"
        hasBorder
        resourceList={cleanedData?.[2]}
      />
      <div className="border-ankara-1 border-b-[20px] relative top-7 rotate-[-3deg]" />
      <div className="border-ankara-1 border-b-[20px] relative top-2 rotate-[3deg]" />
      <ResourcesList
        className="lg:py-20 border-ankara-4 border-b-[20px]"
        title="Annual Reports"
        hasBorder
        isSecondary
        resourceList={cleanedData?.[0]}
      />
      <ResourcesList
        className="lg:py-16"
        title="Special publications"
        hasBorder
        hasOverflow
        resourceList={cleanedData?.[3]}
      />
    </Fragment>
  );
}
