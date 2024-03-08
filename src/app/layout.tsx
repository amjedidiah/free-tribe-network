import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import WhatsappChat from "@/components/layout/whatsapp-chat";
import manrope from "@/lib/font";

export const metadata: Metadata = {
  title: "Free Tribe Network",
  description: "Welcome to the Free Tribe Network",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "font-manrope min-h-full grid grid-rows-[1fr,auto]",
          manrope.variable
        )}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsappChat />
      </body>
    </html>
  );
}
