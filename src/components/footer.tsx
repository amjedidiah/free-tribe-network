import Image from "next/image";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <div className="container py-6 lg:py-24 flex flex-col gap-8 lg:gap-24">
        <div className="flex flex-col gap-2 lg:gap-6">
          <h1 className="text-2xl lg:text-4xl font-semibold">We’d love to hear from you</h1>
          <p className="text-base lg:text-xl font-medium">Our friendly team is always here to chat.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between p-3 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-xl">
            <div className="bg-secondary w-fit p-2 rounded-lg">
              <Image src="/icons/message-circle.svg" alt="Message Icon" width={24} height={24} />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium">Chat to support</p>
              <p>We’re here to help.</p>
            </div>
            <p className="text-primary">Freetribenetwork@gmail.com</p>
          </div>
          <div className="flex flex-col justify-between p-3 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-xl">
            <div className="bg-secondary w-fit p-2 rounded-lg">
              <Image src="/icons/map-pin.svg" alt="Message Icon" width={24} height={24} />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium">Visit us</p>
              <p>Visit our office HQ.</p>
            </div>
            <p className="text-primary">No 15/11b, YK Abass, Ore-Ofe Estate, Elewiodo, Ibadan.</p>
          </div>

          <div className="flex flex-col justify-between p-3 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-xl">
            <div className="bg-secondary w-fit p-2 rounded-lg">
              <Image src="/icons/phone.svg" alt="Message Icon" width={24} height={24} />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium">Call us</p>
              <p>Mon-Fri from 8am to 5pm.</p>
            </div>
            <p className="text-primary">+234 (0) 815 3494 508</p>
          </div>
        </div>
      </div>
      <footer className="bg-secondary-900 py-6 lg:py-12">
        <div className="container flex flex-col gap-6 lg:gap-8 text-white ">
          <div className="flex justify-between">
            <Image src="/images/free tribe white.png" alt="logo" width={49} height={47} />
            <div className="flex gap-2 lg:gap-4 items-center ">
              <div className="bg-white text-secondary-900 px-4 py-2 lg:py-4 lg:px-6 rounded-full">
                Chat With Us
              </div>
              <Image src="/icons/whatsapp-icon.svg" alt="Whatsapp Icon" width={48} height={48} />
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
                By registering, you agree <span className="font-bold">Free Trip Network</span>{" "}
                storing and using your email address for the purpose of sending you our monthly
                newsletter. If you wish to unsubscribe or find out how your data is processed
              </p>
              <form className="flex gap-2 lg:gap-4">
                <input className="rounded-md flex-grow" type="text" />
                <Button>Subscibe</Button>
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
