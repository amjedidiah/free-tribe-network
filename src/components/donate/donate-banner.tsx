import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";

export default function DonateBanner() {
  const t = useTranslations("Donate")
  return (
    <Banner
      imageTitle="donate-banner_n2ad95"
      title={t("Banner.title")}
      wrapperClassName="[&_.container]:relative [&_h1]:lg:max-w-lg [&_h1]:xl:max-w-xl"
      id="donate-banner"
    >
      <div className="flex flex-col gap-3 sm:gap-6">
        {/* <p className="lg:max-w-lg xl:max-w-xl">
          Proceed to a secure payment page to complete your donation. Soon
          you'll be able to proceed to a secure payment page to complete your
          donation.
        </p> */}
        <div>
          <p className="lg:max-w-lg xl:max-w-xl mb-2">{t("Banner.content")}</p>
          <p>
            <span className="bg-primary-100 text-primary font-semibold rounded py-1 px-2 text-sm">
              {t("Banner.Coming soon")}
            </span>
          </p>
        </div>

        {/* <DonateForm /> */}
      </div>
    </Banner>
  );
}
