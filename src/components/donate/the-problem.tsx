import { problems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function TheProblem() {
  const t = useTranslations("Donate.Problems");

  return (
    <section
      className="py-10 lg:pt-12 lg:pb-20 overflow-y-hidden"
      id={t("title").toLowerCase().replaceAll(" ", "-")}
    >
      <article className="container h2-gap">
        <h2>{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {problems.map(({ title }, i) => (
            <div
              key={title}
              className=" basis-96 flex-auto h-[446px] relative rounded-2xl"
            >
              <div
                className={cn("flex items-end h-full rounded-2xl", {
                  "bg-problem-1": i === 0,
                  "bg-problem-2": i === 1,
                  "bg-problem-3": i === 2,
                  "bg-problem-4": i === 3,
                  "bg-problem-5": i === 4,
                })}
              >
                <div className="text-white flex flex-col items-stretch justify-stretch gap-2 p-4 md:p-6 rounded-b-2xl">
                  <h5 className="font-semibold">
                    {t(`${title}.title` as any)}
                  </h5>
                  <p className="lg:max-xl:min-h-44 xl:max-2xl:min-h-32">
                    {t(`${title}.description` as any)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
