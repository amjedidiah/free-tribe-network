type BannerProps = {
  image: string;
  children: React.ReactNode;
  positionClass?:
    | "bg-top"
    | "bg-left-top"
    | "bg-right-top"
    | "bg-bottom"
    | "bg-left-bottom"
    | "bg-right-bottom"
    | "bg-center"
    | "bg-left"
    | "bg-right";
};

// TODO: Make banner image shorter, but full-width
export default function Banner({
  image,
  children,
  positionClass = "bg-center",
}: BannerProps) {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[85vh] max-h-[772px] flex items-center bg-cover bg-no-repeat ${positionClass}`}
    >
      <div className="container z-[2]">{children}</div>
    </section>
  );
}
