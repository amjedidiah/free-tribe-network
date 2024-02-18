import Script from "next/script";

export default function Tweets() {
  return (
    <section className="py-10 lg:pt-20 max-w-full">
      <article className="container grid gap-6">
        <h2 className="text-black font-semibold text-2xl lg:text-[2rem]">
          Keep in touch with our Twitter activities
        </h2>
        <div id="tweets" className="max-w-full">
          <a
            className="twitter-timeline"
            data-height="344"
            href="https://twitter.com/freetribenetwrk?ref_src=twsrc%5Etfw"
          >
            Tweets by freetribenetwrk
          </a>{" "}
          <Script async src="https://platform.twitter.com/widgets.js" />
        </div>
      </article>
    </section>
  );
}
