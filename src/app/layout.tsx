import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// TODO: Finish configuring all other metadata fields with client suggestion
// type Props = {
//   searchParams: { [key: string]: string | string[] | undefined };
// };
// export async function generateMetadata({
//   searchParams,
// }: Props): Promise<Metadata> {
//   return {
//     title: "Home | Free Tribe Network",
//     description: "Welcome to Free Tribe Network",
//   };
// }

export const metadata: Metadata = {
  title: "Home | Free Tribe Network",
  description: "Welcome to Free Tribe Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope`}>{children}</body>
    </html>
  );
}
