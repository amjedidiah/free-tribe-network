"use client";
import Image from "next/image";
import { getApolloClient } from "../../lib/apollo-client";
import { Project, Card } from "@/components";
import { Node, ClassName, Props, Post, GeneralSettings } from "../../../types";
import { gql, useQuery } from "@apollo/client";

const gridClass = [
  "h-[30rem] max-w-[26rem] border-4 xl:col-start-1 xl:col-end-3 lg:col-start-1 lg:col-end-4",
  "h-[30rem] max-w-[26rem] border-4 xl:col-start-3 xl:col-end-5 lg:col-start-4 lg:col-end-7",
  "h-[30rem] max-w-[26rem] border-4 xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:col-end-4",
  "h-[30rem] max-w-[26rem] border-4 xl:col-start-1 xl:col-end-3 lg:col-start-4 lg:col-end-7",
  "h-[30rem] max-w-[26rem]  border-4 xl:col-start-3 xl:col-end-5 lg:col-start-1 lg:col-end-4",
  "h-[30rem] max-w-[26rem] border-pink-300 border-4 xl:col-start-5 xl:col-end-7 lg:col-start-4 lg:col-end-7",
  ``,
];

const mapPosts = (
  posts: { edges: { node: Node }[] } | null | undefined,
  classNames: ClassName
) => {
  return (
    posts?.edges.map(({ node }, index) => ({
      ...node,
      path: `/posts/${node.slug}`,
      className: classNames?.[index] ?? "",
    })) ?? []
  );
};

const Resources = () => {
  const GET_RESOURCES = gql`
    query GetResources {
      category(id: "dGVybToz") {
        databaseId
        children {
          edges {
            node {
              databaseId
              posts {
                edges {
                  node {
                    excerpt
                    id
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_RESOURCES);

  const childrenEdges = data?.category?.children?.edges ?? [];

  const annualReportPosts = mapPosts(childrenEdges[0]?.node?.posts, gridClass);
  const bulletins = mapPosts(childrenEdges[1]?.node?.posts, gridClass);
  const research = mapPosts(childrenEdges[2]?.node?.posts, gridClass);
  const specialPublications = mapPosts(
    childrenEdges[3]?.node?.posts,
    gridClass
  );

  // const annualReportPosts =
  //   data?.category?.children?.edges[0]?.node?.posts?.edges.map(({ node }) => ({
  //     ...node,
  //     path: `/posts/${node.slug}`,
  //   }));

  // const bulletins = data?.category?.children?.edges[1]?.node?.posts?.edges.map(
  //   ({ node }) => ({
  //     ...node,
  //     path: `/posts/${node.slug}`,
  //   })
  // );

  // const research = data?.category?.children?.edges[2]?.node?.posts?.edges.map(
  //   ({ node }) => ({
  //     ...node,
  //     path: `/posts/${node.slug}`,
  //   })
  // );

  // const specialPublications =
  //   data?.category?.children?.edges[3]?.node?.posts?.edges.map(({ node }) => ({
  //     ...node,
  //     path: `/posts/${node.slug}`,
  //   }));

  const page = { ...data?.generalSettings };
  console.log({ loading, error, data });

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
            title="5 min read"
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
          <div className="flex justify-center xl:justify-start gap-12 pt-12 overflow-x-auto flex-wrap xl:flex-nowrap lg:overflow-x-scroll snap-x ">
            {bulletins &&
              bulletins.length > 0 &&
              bulletins.map((item) => (
                <Card
                  key={item.id}
                  showDescription={true}
                  title={item.title}
                  supportText="Nov 24, 2023"
                  buttonColor="bg-[#065B82]"
                  className="min-w-96"
                />
              ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <h2>Research</h2>
        <div className="grid gap-12 lg:grid-cols-6 xl:grid-rows-2 lg:grid-rows-3 pt-12 place-content-center m-0">
          {research &&
            research.length > 0 &&
            research.map((item) => (
              <Card
                key={item.id}
                description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
                showDescription={true}
                title={item.title}
                supportText="Nov 24, 2023"
                className={`border-pink-300 ${item.className}`}
                buttonColor="bg-pink-500 hover:bg-pink-700"
              />
            ))}
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
          <div className="grid gap-12 justify-center  lg:grid-cols-6 lg:grid-rows-2 lg:pt-24 pt-12">
            {annualReportPosts &&
              annualReportPosts.length > 0 &&
              annualReportPosts.map((item) => (
                <Card
                  key={item.id}
                  description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
                  showDescription={true}
                  title={item.title}
                  supportText="Nov 24, 2023"
                  className={`border-[#B2CCD8] ${item.className}`}
                  buttonColor="bg-[#387C9B]"
                />
              ))}
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
      <section className="container mx-auto lg:py-24 py-12">
        <h2>Special Publications</h2>
        <div className="flex justify-center xl:justify-start gap-12 pt-12 overflow-x-auto flex-wrap xl:flex-nowrap lg:overflow-x-scroll snap-x ">
          {specialPublications &&
            specialPublications.length > 0 &&
            specialPublications.map((item) => (
              <Card
                key={item.id}
                description="Networking: Connect with fellow designers, UI/UX enthusiasts, and Figma aficionados in a relaxed"
                showDescription={true}
                title={item.title}
                supportText="Nov 24, 2023"
                className="h-[30rem] min-w-96 max-w-[26rem] border-pink-300 border-4"
                buttonColor="bg-pink-500 hover:bg-pink-700"
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
