import { contactChannels } from "@/lib/data";
import Image from "next/image";

type ContactCardProps = (typeof contactChannels)[number];

export default function ContactCard({
  image,
  header,
  subHeader,
  text,
  href,
}: ContactCardProps) {
  return (
    <div className="flex flex-col p-4 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-[0.625rem]">
      <div className="bg-secondary w-fit p-2 rounded-lg">
        <div className="relative w-6 h-6">
          <Image
            src={image}
            alt={`${header}-icon`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100%"
          />
        </div>
      </div>
      <div className="h5-gap">
        <h5>{header}</h5>
        <p>{subHeader}</p>
        {href ? (
          <a href={href} className="mt-2 text-primary">
            {text}
          </a>
        ) : (
          <p className="mt-2 text-primary">{text}</p>
        )}
      </div>
    </div>
  );
}
