import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = {
  trigger: string;
  shouldShowRefreshButton?: boolean;
};

export default function NoInitiativeData({
  trigger,
  shouldShowRefreshButton = true,
}: Readonly<Props>) {
  const t = useTranslations("News");

  return (
    <article className="col-span-full text-center grid gap-3 p-8">
      <h5>{t("empty", { title: t(`tabs.${trigger}` as any) })}</h5>
      {shouldShowRefreshButton && (
        <Link href="/news-events">
          <Button variant="outline">{t("refresh")}</Button>
        </Link>
      )}
    </article>
  );
}
