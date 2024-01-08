type BanerProps = {
  image: string;
  children: React.ReactNode;
};

export function Banner({ image, children }: BanerProps) {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] flex items-center"
    >
      <div className="container z-50">{children}</div>
    </section>
  );
}
