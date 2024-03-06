import { partners } from "@/lib/data";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-10">
      <article className="container grid gap-8 text-center">
        <h2 className="text-black">Our Partners</h2>
        <div className="flex flex-wrap justify-around gap-5">
          {partners.map(({ name, src }) => (
            <Image key={name} src={src} alt={name} height={87} />
          ))}
        </div>
      </article>
    </section>
  );
}
