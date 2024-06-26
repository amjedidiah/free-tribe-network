import Image from "next/image";
import { contactNumber } from "@/lib/data";

export default function WhatsappChat() {
  return (
    <aside className="fixed right-0 bottom-20 lg:bottom-[10vh] w-full z-[2] pointer-events-none">
      <div className="max-2xl:container grid justify-end relative 2xl:right-[4%]">
        <a
          href={`https://wa.me/${contactNumber}`}
          className="pointer-events-auto"
          target="_blank"
        >
          <div className="flex gap-2 lg:gap-4 items-center">
            <span className="hidden">WhatsApp Icon</span>
            <span className="shadow-md rounded-3xl relative w-12 h-12 lg:w-14 lg:h-14">
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="Whatsapp Icon"
                fill
                sizes="100%"
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
}
