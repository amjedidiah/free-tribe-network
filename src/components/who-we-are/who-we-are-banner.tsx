import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";

export default function WhoWeAreBanner() {
  const t = useTranslations('Who we are')
  return (
    <Banner
      imageTitle="who-we-are-banner"
      title={t('Banner title')}
      wrapperClassName="bg-[rgba(26,26,26,0.25)]"
    >
      <p className="max-w-[41rem]">
        {t('Banner description')}
      </p>
    </Banner>
  );
}
