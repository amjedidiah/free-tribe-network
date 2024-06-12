import { useTranslations } from "next-intl";

type Props = { isFetching: boolean; title: string };

export default function FetchingLoader({ isFetching, title }: Props) {
  const t = useTranslations("News")
  if (!isFetching) return null;

  return (
    <article className="col-span-full text-center grid gap-3 p-8">
      <h5 className="animate-pulse">{t("fetching")} {title}...</h5>
    </article>
  );
}
