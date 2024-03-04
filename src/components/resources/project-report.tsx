import ProjectReportCard from "./project-report-card";

const reports = Array(6).fill(0);
export default function ProjectReport() {
  if (!reports.length) return null;

  return (
    <section className="py-10 lg:py-16 border-ankara-1 border-b-[20px]">
      <div className="container flex flex-col gap-10">
        <h2 className="mb-4">Project / Activity Reports</h2>
        <div className="flex flex-wrap justify-around gap-x-6 gap-y-14">
          {reports.map((item, i) => (
            <ProjectReportCard
              key={`taffiya-${i}`}
              title="taffiya"
              src="/images/taffiya.png"
              minsRead={6}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
