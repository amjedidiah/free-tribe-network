import Image from "next/image";
import { contactNumber } from "@/components/footer";

export default function WhatsappChat() {
  return (
    <aside className="fixed right-0 bottom-20 lg:bottom-[10vh] w-full">
      <div className="container grid justify-end">
        <a href={`https://wa.me/${contactNumber}`} draggable>
          <div className="flex gap-2 lg:gap-4 items-center">
            <div className="bg-white text-secondary-900 p-3 lg:px-6 rounded-full shadow-md flex">
              Chat <span className="hidden lg:block ms-2"> With Us</span>
            </div>
            <span className="shadow-md rounded-3xl relative w-10 h-10 lg:w-12 lg:h-12">
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
