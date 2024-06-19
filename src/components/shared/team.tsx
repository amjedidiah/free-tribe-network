import { cn } from "@/lib/utils";
import ContentImage from "@/components/shared/content-image";
import { Link } from "@/lib/i18n.config";
import { HTMLAttributes } from "react";
import { getTranslations } from "next-intl/server";

type Mate = {
  name: string;
  src: string;
};

type TeamProps = {
  title: string;
  shouldSeeMore?: boolean;
  mates: Mate[];
  matesContainerClassName: string;
} & HTMLAttributes<HTMLDivElement>;

export default async function Team({
  title,
  shouldSeeMore = false,
  mates,
  id,
  className,
  matesContainerClassName,
}: TeamProps) {
  const t = await getTranslations("Team");

  return (
    <section className={cn("py-10 grid gap-8", className)} id={id}>
      <article className="container">
        <div className="flex flex-row flex-wrap gap-2 lg:gap-4 justify-between items-center">
          <h2>{t(title as any)}</h2>
          {shouldSeeMore && (
            <Link
              href="/who-we-are?section=bot"
              className="bg-primary-400 text-white py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
            >
              {t("See More")}
            </Link>
          )}
        </div>
      </article>
      <article className="container lg:overflow-x-visible">
        <div
          className={cn(
            "grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-7 max-lg:justify-evenly",
            matesContainerClassName
          )}
        >
          {mates.map(({ name, src }) => (
            <div key={name} className="grid gap-4">
              <div className="lg:w-[288px] h-[296px] relative image-container">
                <ContentImage
                  title={src}
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="shadow-xl"
                />
              </div>
              <div>
                <p className="text-gray-900 text-xl font-medium">
                  {t(`${name}.name` as any)}
                </p>
                <p className="text-secondary-500 text-lg capitalize">
                  {t(`${name}.title` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
