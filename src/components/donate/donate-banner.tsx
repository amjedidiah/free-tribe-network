import Banner from "@/components/shared/banner";
import DonateForm from "@/components/donate/donate-form";

export default function DonateBanner() {
  return (
    <Banner
      imageTitle="donate-banner"
      title="Help People Across the Globe"
      wrapperClassName="[&_.container]:relative [&_h1]:lg:max-w-lg [&_h1]:xl:max-w-xl"
      id="donate-banner"
    >
      <div className="flex flex-col gap-3 sm:gap-6">
        <p className="lg:max-w-lg xl:max-w-xl">
          Proceed to a secure payment page to complete your donation.
        </p>

        <DonateForm />
      </div>
    </Banner>
  );
}
