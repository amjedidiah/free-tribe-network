import { contactChannels } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ContactCardProps = (typeof contactChannels)[number];

export default function ContactCard({ image, title, href }: ContactCardProps) {
  const t = useTranslations("Layout.Contact");

  return (
    <div className="flex flex-col p-4 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-[0.625rem]">
      <div className="bg-secondary w-fit p-2 rounded-lg">
        <div className="relative w-6 h-6">
          <Image
            src={image}
            alt={`${title}-icon`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100%"
          />
        </div>
      </div>
      <div className="h5-gap">
        <h3 className="text-xl lg:text-2xl font-light">
          {t(`${title}.header` as any)}
        </h3>
        <p>{t(`${title}.subHeader` as any)}</p>
        {href ? (
          <a href={href} className="mt-2 text-primary">
            {t(`${title}.text` as any)}
          </a>
        ) : (
          <p className="mt-2 text-primary">{t(`${title}.text` as any)}</p>
        )}
      </div>
    </div>
  );
}
