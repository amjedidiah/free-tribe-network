type BanerProps = {
  image: string;
  children: React.ReactNode;
};

export function Banner({ image, children }: BanerProps) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] container flex items-center">
      {children}
    </div>
  );
}
