import ProjectReportCard from "@/components/resources/project-report-card";
import { fetchResourcesByCategoryId } from "@/lib/actions";
import { ResourcesIds } from "@/lib/types";
import ShouldRender from "@/components/shared/should-render";

export default async function ProjectReport() {
  const { resourceList, title } = await fetchResourcesByCategoryId({
    id: ResourcesIds.ProjectActivityReport,
  });

  return (
    <section className="py-10 lg:py-16 border-ankara-1 border-b-[20px]">
      <div className="container flex flex-col gap-10">
        <h2 className="mb-4">{title}</h2>
        <ShouldRender condition={Boolean(!resourceList.length)}>
          <article className="col-span-full text-center grid gap-3 p-8">
            <h5>
              No <span className="font-medium">{title}</span> yet
            </h5>
          </article>
        </ShouldRender>
        <ShouldRender condition={Boolean(resourceList.length)}>
          <div className="flex flex-wrap justify-around xl:after:contents-[''] xl:after:flex-auto gap-x-6 gap-y-14">
            {resourceList.map(({ modifiedDate, description, ...rest }) => (
              <ProjectReportCard key={rest.id} {...rest} />
            ))}
          </div>
        </ShouldRender>
      </div>
    </section>
  );
}
