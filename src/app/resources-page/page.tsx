"use client";
import Image from "next/image";
// import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";
import ProjectReport from "@/components/resources/project-report";
import ResourceList from "@/components/resources/resource-list";

const resource = {
  title: "Design Handoff and Developer Handover",
  uploadDate: "NOV 24, 2023",
  src: "/images/bulletin.png",
  link: "",
};

const reports = Array(6).fill(resource);
const reportsWithDesc = Array(6).fill({
  ...resource,
  description:
    "Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed",
});

// const GET_RESOURCES = gql`
//   query GetResources {
//     category(id: "dGVybToz") {
//       databaseId
//       children {
//         edges {
//           node {
//             databaseId
//             posts {
//               edges {
//                 node {
//                   excerpt
//                   id
//                   slug
//                   title
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const Resources = () => {
  // const { loading, error, data } = useQuery(GET_RESOURCES);

  return (
    <Fragment>
      <Image
        src="/images/resource.png"
        alt="resources"
        width={2880}
        height={1246}
        className="mt-20"
      />
      <ProjectReport />
      <ResourceList
        title="Bulletins"
        className=" lg:py-16"
        resources={reports}
        hasOverflow
        isSecondary
      />
      <ResourceList
        className="lg:py-24"
        resources={reportsWithDesc}
        title="Researches"
        hasBorder
      />
      <ResourceList
        className="lg:py-20 border-ankara-4 border-b-[20px]"
        resources={reportsWithDesc}
        title="Annual Reports"
        hasBorder
        isSecondary
      />
      <ResourceList
        className="lg:py-16"
        resources={reportsWithDesc}
        title="Special publications"
        hasBorder
        hasOverflow
      />
    </Fragment>
  );
};

export default Resources;
