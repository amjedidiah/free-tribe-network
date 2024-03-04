import Script from "next/script";

export default function Tweets() {
  return (
    <section className="py-10 lg:pt-20 max-w-full">
      <article className="container h3-gap">
        <h3 className="text-black">Keep in touch with our activities on X</h3>
        <div id="tweets" className="max-w-full">
          <a
            className="twitter-timeline"
            data-height="344"
            href="https://twitter.com/freetribenetwrk?ref_src=twsrc%5Etfw"
          >
            Tweets by freetribenetwrk
          </a>{" "}
          <Script src="https://platform.twitter.com/widgets.js" />
        </div>
      </article>
    </section>
  );
}
