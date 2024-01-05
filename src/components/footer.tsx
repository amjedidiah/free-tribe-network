import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="justify-between">
          <Image src="/images/logo.webp" alt="logo" width={49} height={47} />
        </div>
      </div>
    </footer>
  );
}
