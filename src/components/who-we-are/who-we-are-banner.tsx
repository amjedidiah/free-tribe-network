import Banner from "@/components/shared/banner";
import { getTranslations } from "next-intl/server";

export default async function WhoWeAreBanner() {
  const t = await getTranslations("Who we are");
  return (
    <Banner
      imageTitle="who-we-are-banner_owokwo"
      title={t("Banner title")}
      wrapperClassName="bg-[rgba(26,26,26,0.25)]"
    >
      <p className="max-w-[41rem]">{t("Banner description")}</p>
    </Banner>
  );
}
