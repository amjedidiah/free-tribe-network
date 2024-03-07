import ProjectReportCard from "@/components/resources/project-report-card";
import { fetchResourcesByCategoryId } from "@/lib/actions";
import { ResourcesIds } from "@/lib/constants";

export default async function ProjectReport() {
  const { resourceList, title } = await fetchResourcesByCategoryId(
    ResourcesIds.ProjectActivityReport
  );
  if (!resourceList?.length) return null;

  return (
    <section className="py-10 lg:py-16 border-ankara-1 border-b-[20px]">
      <div className="container flex flex-col gap-10">
        <h2 className="mb-4">{title}</h2>
        <div className="flex flex-wrap justify-around xl:after:contents-[''] xl:after:flex-auto gap-x-6 gap-y-14">
          {resourceList.map(({ modifiedDate, description, ...rest }) => (
            <ProjectReportCard key={rest.id} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
}
