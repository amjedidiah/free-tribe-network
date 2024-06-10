import { Button } from "@/components/ui/button";
import { formatLinkLabel } from "@/lib/utils";
import { Link } from "@/lib/i18n.config";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

type Props = {
  shouldShowRefreshButton?: boolean;
};

export default function NoInitiativeData({
  shouldShowRefreshButton = true,
}: Props) {
  const searchParams = useSearchParams();
  const urlSection = searchParams.get("section");
  const title = formatLinkLabel(urlSection);
  const t = useTranslations("News");

  return (
    <article className="col-span-full text-center grid gap-3 p-8">
      {title && (
        <h5>
          {t("empty", { title: t(`tabs.${urlSection}` as any) })}
        </h5>
      )}
      {shouldShowRefreshButton && (
        <Link href="/news-events">
          <Button variant="outline">{t("refresh")}</Button>
        </Link>
      )}
    </article>
  );
}
