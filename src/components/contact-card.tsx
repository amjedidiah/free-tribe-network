import Image from "next/image";
import { contactChannels } from "@/components/footer";

type ContactCardProps = (typeof contactChannels)[number];

export default function ContactCard({
  image,
  header,
  subHeader,
  text,
  href,
}: ContactCardProps) {
  return (
    <div className="flex flex-col p-4 lg:p-6 gap-12 lg:gap-16 bg-[#E6EFF380] rounded-[0.625rem]">
      <div className="bg-secondary w-fit p-2 rounded-lg">
        <Image src={image} alt={`${header}-icon`} width={24} height={24} />
      </div>
      <div className="grid gap-2">
        <p className="text-xl font-medium">{header}</p>
        <p>{subHeader}</p>
        {href ? (
          <a href={href} className="mt-3 text-primary">
            {text}
          </a>
        ) : (
          <p className="mt-3 text-primary">{text}</p>
        )}
      </div>
    </div>
  );
}
