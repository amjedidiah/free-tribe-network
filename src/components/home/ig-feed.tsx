import { igFetchImages } from "@/lib/actions/instagram";
import { getTranslations } from "next-intl/server";
import IGFeedList from "@/components/home/ig-feed-list";

export default async function IGFeed() {
  const images = await igFetchImages();
  const t = await getTranslations("Home.Instagram Feed");

  if (!images?.length) return null;

  return (
    <section className="py-10 lg:pt-20 max-w-full">
      <article className="container h3-gap">
        <h3 className="text-black">{t("title")}</h3>
        <IGFeedList list={images} />
      </article>
    </section>
  );
}
