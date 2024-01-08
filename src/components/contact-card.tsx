import Image from "next/image";

type ContactCardProps = {
  image: string;
  header: string;
  subHeader: string;
  text: string;
};

export default function ContactCard({ image, header, subHeader ,text}: ContactCardProps) {
  return (
    <div className="flex flex-col justify-between p-3 lg:p-6 gap-8 lg:gap-12 bg-[#E6EFF380] rounded-xl">
      <div className="bg-secondary w-fit p-2 rounded-lg">
        <Image src={image} alt="Message Icon" width={24} height={24} />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-medium">{header}</p>
        <p>{subHeader}</p>
      </div>
      <p className="text-primary">{text}</p>
    </div>
  );
}
