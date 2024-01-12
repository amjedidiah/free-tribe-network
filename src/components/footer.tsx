import Image from "next/image";
import ContactCard from "@/components/contact-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { routes } from "@/lib/data";

export const contactNumber = "+2348153494508";

export const contactChannels = [
  {
    image: "/icons/message-circle.svg",
    header: "Chat to support",
    subHeader: "We’re here to help.",
    text: "freetribenetwork@gmail.com",
    href: "mailto:freetribenetwork@gmail.com",
  },
  {
    image: "/icons/message-circle.svg",
    header: "Visit Us",
    subHeader: "Visit our office HQ.",
    text: "No 15/11b, YK Abass, Ore-Ofe Estate, Elewiodo, Ibadan.",
  },
  {
    image: "/icons/phone.svg",
    header: "Call us",
    subHeader: "Mon-Fri from 8am to 5pm.",
    text: "+234 (815) 3494 508",
    href: `tel:${contactNumber}`,
  },
];

const socials = [
  {
    name: "twitter",
    src: "/icons/twitter-icon.svg",
    href: "https://twitter.com/freetribenetwrk",
  },
  {
    name: "linkedin",
    src: "/icons/linkedin-icon.svg",
    href: "https://www.linkedin.com/company/freetribenetwork",
  },
  {
    name: "facebook",
    src: "/icons/facebook-icon.svg",
    href: "https://web.facebook.com/freetribenetwrk",
  },
  {
    name: "instagram",
    src: "/icons/instagram-icon.svg",
    href: "https://www.instagram.com/freetribenetwork",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <section className="container" id="contact-us">
        <article className="py-12 lg:py-24 grid gap-6">
          <h1 className="text-2xl lg:text-[2rem] leading-[3rem] spacing font-semibold text-black">
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
                <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                  {routes.map(({ links, ...item }) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-8">
                  {socials.map(({ name, src, href }) => (
                    <a
                      href={href}
                      className="w-5 h-5 lg:w-6 lg:h-6 relative"
                      key={name}
                    >
                      <span className="hidden">{name}</span>
                      <Image
                        src={src}
                        alt={name}
                        fill
                        style={{ objectPosition: "center", objectFit: "cover" }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[30rem] flex flex-col justify-between gap-4">
              <div>
                <h3 className="font-extrabold text-xl">
                  Subscribe to our mail
                </h3>
                <p className="text-xs text-slate-300">
                  By registering, you agree to{" "}
                  <span className="font-bold">Free Tribe Network</span> storing
                  and using your email address for the purpose of sending you
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
