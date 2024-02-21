import Image from "next/image";

export default function TheProblem() {
  return (
    <section className="pt-10 lg:pt-12 overflow-y-hidden">
      <article className="container h2-gap">
        <h2>The Problem</h2>
        <div className="text-description flex flex-col gap-3">
          <p>
            About 30% of Nigerian women aged 15-49 have experienced physical
            violence, while 68% have experienced psychological, sexual, and
            economic forms of abuse. The African region accounts for a
            prevalence of 43.5% of bullying among adolescents.
          </p>
          <p>
            Women autonomy to make decisions regarding their sexual/reproductive
            health: 46% 30.3% of girls in Nigeria are married before their 18th
            birthday and 12.3% are married before the age of 15. 78% of global
            suicides occur in low- and middle-income countries.
          </p>
          <p>
            Total fertility rate in Nigeria (the average number of children born
            to a woman over a lifetime): 5.7 Maternal Mortality Rate in Nigeria:
            545 deaths per 100,000 live births Contraceptive prevalence rate:
            18% (all women) 21% (married or in union) People living with HIV in
            Nigeria: 1.9million
          </p>
        </div>
      </article>
      <article className="flex justify-end max-w-[1600px] mx-auto">
        <Image
          src="/images/donate.png"
          alt="Donate"
          //   width={498}
          //   height={321}
          //   width={622.5}
          //   height={401.25}
          width={572.7}
          height={369.15}
          className="relative top-10"
        />
      </article>
    </section>
  );
}
