import Banner from "@/components/shared/banner";

export default function DonateBanner() {
  return (
    <Banner
      imageTitle="donate-banner"
      title="Help People Across the Globe"
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
          <p className="lg:max-w-lg xl:max-w-xl mb-2">
            Soon you&apos;ll be able to proceed to a secure payment page to
            complete your donation.
          </p>
          <p>
            <span className="bg-primary-100 text-primary font-semibold rounded py-1 px-2 text-sm">
              Coming soon
            </span>
          </p>
        </div>

        {/* <DonateForm /> */}
      </div>
    </Banner>
  );
}
