import { cn } from "@/lib/utils";
import Socials from "@/components/shared/socials";
import { Link } from "@/lib/i18n.config";
import { volunteerNowLink } from "@/lib/data";
import { Button } from "@/components/ui/button";
import ContentImage from "@/components/shared/content-image";
import { IActivity } from "@/lib/types";
import SafeHTML from "@/components/shared/safe-html";
import { useTranslations } from "next-intl";

type Props = Pick<
  IActivity,
  "title" | "excerpt" | "newsFieldGroup" | "isUpcoming"
>;

export default function ActivityContentTop({
  isUpcoming,
  title,
  newsFieldGroup: { dateTime },
  excerpt,
}: Props) {
  const imageTitle = isUpcoming ? "activity-ankara-2" : "activity-ankara-1";
  const t = useTranslations("Activity.Actions");

  return (
    <article className="container flex flex-col gap-8">
      <div className="h3-gap mb-4">
        <h1 className="text-black font-semibold">{title}</h1>
        <h5 className="text-description font-medium">{dateTime}</h5>
      </div>
      <div className="text-description">
        <SafeHTML htmlContent={excerpt} />
      </div>
      <Socials
        className={cn(" mb-4", {
          "[&_*]:text-primary-500": isUpcoming,
          "[&_*]:text-secondary-500": !isUpcoming,
        })}
      />
      <div className="h-72 relative">
        <ContentImage title={imageTitle} fill sizes="100%" />
        {isUpcoming && (
          <div className="absolute left-0 right-0 h-full flex items-center justify-center gap-4 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem]">
            <Link href="/donate" className=" text-primary-400 bg-white">
              {t("Donate")}
            </Link>
            <a href={volunteerNowLink} target="_blank">
              <Button className="bg-transparent hover:bg-transparent border-white border-2 py-2 px-4 w-fit text-white">
                {t("Volunteer")}
              </Button>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
