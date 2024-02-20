import Image from "next/image";
import ContactCard from "@/components/layout/contact-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactChannels, currentYear, routes, socials } from "@/lib/data";
import CustomIcon from "@/components/shared/icon";

export default function Footer() {
  return (
    <footer>
      <section className="container" id="contact-us">
        <article className="py-12 lg:py-24 grid gap-6">
          <h1 className="text-2xl lg:text-[2rem] spacing font-semibold text-black">
            We&apos;d love to hear from you
          </h1>
          <p className="text-base lg:text-xl font-medium">
            Our friendly team is always here to chat.
          </p>
        </article>

        <article className="pb-12 lg:pb-24 grid lg:grid-cols-3 gap-6">
          {contactChannels.map((i) => (
            <ContactCard key={i.header} {...i} />
          ))}
        </article>
      </section>
      <section className="bg-secondary-900 py-6 lg:py-10">
        <div className="container grid gap-6 lg:gap-8 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/images/free tribe white.png"
                  alt="logo"
                  width={60}
                  height={60}
                />
              </Link>
              <div className="grid gap-4">
                <ul className="flex flex-col lg:flex-row gap-4">
                  {routes.map(({ links, ...item }) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-8">
                  {socials.map(({ name, src, href, Icon }) => (
                    <a
                      href={href}
                      className="w-5 h-5 lg:w-6 lg:h-6 relative flex items-center"
                      key={name}
                    >
                      <span className="hidden">{name}</span>
                      {Icon && <CustomIcon icon={Icon} />}
                      {src && (
                        <Image
                          src={src}
                          alt={name}
                          fill
                          sizes="100%"
                          style={{
                            objectPosition: "center",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="mailing-list"
              className="lg:w-[25rem] max-w-[30rem] flex flex-col justify-between gap-4"
            >
              <div>
                <h3 className="font-extrabold text-xl">
                  Subscribe to our mail
                </h3>
                <p className="text-xs text-slate-300">
                  By registering, you permit the{" "}
                  <span className="font-bold">Free Tribe Network</span> to store
                  and collect your email address for the purpose of sending you
                  our monthly newsletter.
                </p>
              </div>
              <form className="flex gap-2 lg:gap-4">
                <input
                  className="rounded-md flex-grow text-black py-2 px-3 h-auto"
                  type="email"
                  name="email"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  autoComplete="email"
                />
                <Button className="h-auto w-32">Subscribe</Button>
              </form>
            </div>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <p>&copy; {currentYear} Free Tribe Network</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
