import Image from "next/image";

export default function Nav() {
  return (
    <nav className="bg-white">
      <div className="container-custom p-3 flex">
        <Image src="/images/logo.webp" alt="logo" width={49} height={47} />
      </div>
    </nav>
  );
}
