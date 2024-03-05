import Banner from "@/components/shared/banner";

export default function WhoWeAreBanner() {
  return (
    <Banner
      image="/images/banners/who-we-are-banner.jpeg"
      title="Empowering Communities"
      wrapperClassName="bg-[rgba(26,26,26,0.25)]"
    >
      <p className="max-w-[41rem]">
        At the Free Tribe Network, we promote reproductive wellness, encourage
        health seeking and reporting behaviours, and conduct programs, projects
        and research, to improve your reproductive health and family well-being.
      </p>
    </Banner>
  );
}
