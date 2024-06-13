import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { IActivity } from "@/lib/types";
import SafeHTML from "@/components/shared/safe-html";
import { Link, usePathname, useRouter } from "@/lib/i18n.config";
import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { formatLinkLabel } from "@/lib/utils";

export default function ActivityCard({
  slug,
  featuredImage,
  title,
  description,
  newsFieldGroup: { date, time, venue },
  categories,
}: IActivity) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Our initiative.initiatives");

  const handleInitiativeSelect = useCallback(
    (slug: string) => {
      const updatedParams = new URLSearchParams(searchParams.toString());
      const value = t(`${slug}.id` as any);
      updatedParams.set("initiative", value);

      router.push(`${pathname}?${updatedParams.toString()}` as any, {
        scroll: false,
      });
    },
    [pathname, router, searchParams, t]
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="rounded-[0.5rem] overflow-hidden w-full sm:w-[187px] max-sm:h-52 sm:min-h-[206px] sm:h-full shrink-0 relative ">
        <Image
          fill
          sizes="100%"
          src={featuredImage?.node?.mediaItemUrl || "/images/activity.webp"}
          alt={title}
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between max-sm:w-full sm:h-full">
        <p className="text-xs py-1 text-[rgba(140,140,140,0.80)] uppercase">
          {date} by {time} at {venue}
        </p>
        <div className="h5-gap">
          <Link
            href={{
              pathname: "/activity/[slug]",
              params: { slug },
            }}
            className="flex justify-between items-center"
          >
            <h5 className="align-self-start font-semibold">{title}</h5>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow-up-right"
              width={24}
              height={24}
            />
          </Link>
          <div className="text-description">
            <SafeHTML htmlContent={description} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {categories.map((item) => {
            return item.parent?.node.slug === "initiatives" ? (
              <div
                key={item.slug}
                onClick={() => handleInitiativeSelect(item.slug)}
                className="bg-primary-50 w-fit p-1 rounded-2xl cursor-pointer"
              >
                <Badge
                  variant="outline"
                  className="text-xs border-none rounded-2xl flex items-center py-[2px] px-2 w-fit text-primary-700 uppercase bg-white h-fit"
                >
                  {formatLinkLabel(t(`${item.slug}.id` as any))}
                </Badge>
              </div>
            ) : (
              <Badge
                key={item.slug}
                variant="outline"
                className="text-xs border-none rounded-2xl flex items-center py-[2px] px-2 w-fit text-primary-700 uppercase bg-white h-fit"
              >
                {item.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
