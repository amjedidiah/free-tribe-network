import Image from "next/image";
import ContactCard from "@/components/contact-card";
import { Button } from "@/components/ui/button";

const contact = [
  {
    image: "/icons/message-circle.svg",
    header: "Chat to support",
    subHeader: "We’re here to help.",
    text: "Freetribenetwork@gmail.com",
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
    text: "+234 (0) 815 3494 508",
  },
];

export default function Footer() {
  return (
    <>
      <div
        className="container py-6 lg:py-24 flex flex-col gap-8 lg:gap-24"
        id="contact-us"
      >
        <div className="flex flex-col gap-2 lg:gap-6">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            We&apos;d love to hear from you
          </h1>
          <p className="text-base lg:text-xl font-medium">
            Our friendly team is always here to chat.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {contact.map((i) => (
            <ContactCard key={i.header} {...i} />
          ))}
        </div>
      </div>
      <footer className="bg-secondary-900 py-6 lg:py-12">
        <div className="container flex flex-col gap-6 lg:gap-8 text-white ">
          <div className="flex justify-between">
            <Image
              src="/images/free tribe white.png"
              alt="logo"
              width={49}
              height={47}
            />
            <div className="flex gap-2 lg:gap-4 items-center ">
              <div className="bg-white text-secondary-900 px-4 py-2 lg:py-4 lg:px-6 rounded-full">
                Chat With Us
              </div>
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="Whatsapp Icon"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-4 lg:gap-10">
              <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Initiatives</li>
                <li>Donate</li>
              </ul>
              <div className="flex gap-8">
                <Image
                  src={"/icons/twitter-icon.svg"}
                  alt={"twitter Icon"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/linkedin-icon.svg"}
                  alt={"twitter Icon"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/facebook-icon.svg"}
                  alt={"twitter Icon"}
                  width={24}
                  height={24}
                />
                <Image
                  src={"/icons/instagram-icon.svg"}
                  alt={"twitter Icon"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="lg:w-[30rem] space-y-2">
              <h3 className="font-extrabold text-lg">Subscribe to our mail</h3>
              <p>
                By registering, you agree{" "}
                <span className="font-bold">Free Trip Network</span> storing and
                using your email address for the purpose of sending you our
                monthly newsletter. If you wish to unsubscribe or find out how
                your data is processed
              </p>
              <form className="flex gap-2 lg:gap-4">
                <input
                  className="rounded-md flex-grow"
                  type="email"
                  name="email"
                  aria-label="Email Address"
                  autoComplete="email"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <p>© 2077 Untitled UI. All rights reserved.</p>
            <ul className="flex gap-4">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
