import Image from "next/image";
import { contactNumber } from "@/lib/data";

export default function WhatsappChat() {
  return (
    <aside className="fixed right-0 bottom-20 lg:bottom-[10vh] w-full pointer-events-none z-[2]">
      <div className="container grid justify-end relative lg:-right-4">
        <a href={`https://wa.me/${contactNumber}`} draggable>
          <div className="flex gap-2 lg:gap-4 items-center">
            {/* <div className="bg-white text-secondary-900 p-3 lg:px-6 rounded-full shadow-md flex">
              Chat <span className="hidden lg:block ms-2"> With Us</span>
            </div> */}
            <span className="shadow-md rounded-3xl relative w-12 h-12 lg:w-14 lg:h-14">
              <Image
                src="/icons/whatsapp-icon.svg"
                alt="Whatsapp Icon"
                fill
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
}
