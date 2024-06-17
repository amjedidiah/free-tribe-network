import type { Metadata, ResolvingMetadata, Viewport } from "next";
import "@/styles/globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import WhatsappChat from "@/components/layout/whatsapp-chat";
import manrope from "@/lib/font";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/lib/i18n.config";
import { PropsWithLocaleParam } from "@/lib/types";
import { isRtlLang } from "rtl-detect";

export async function generateMetadata(
  { params: { locale } }: PropsWithLocaleParam,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData.default",
  });
  const previousImages = (await parent).openGraph?.images || [];
  const description = t("description");

  const image =
    {
      en: "https://freetribenetwork.com/wp-content/uploads/2024/06/Screenshot-2024-06-17-at-14.34.19.png",
      fr: "https://freetribenetwork.com/wp-content/uploads/2024/06/Screenshot-2024-06-17-at-14.34.11.png",
      nl: "https://freetribenetwork.com/wp-content/uploads/2024/06/Screenshot-2024-06-17-at-14.34.04.png",
    }[locale] ||
    "https://freetribenetwork.com/wp-content/uploads/2024/06/Screenshot-2024-06-17-at-14.34.19.png";

  const graph = {
    images: [image, ...previousImages],
    description,
  };

  return {
    title: {
      template: "%s | Free Tribe Network",
      default: "Free Tribe Network",
    },
    description,
    openGraph: graph,
    twitter: graph,

    metadataBase: new URL("https://www.freetribenetwork.org"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        fr: "/fr",
        nl: "/nl",
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ee35a3",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<PropsWithLocaleParam>) {
  const messages = await getMessages();
  const dir = isRtlLang(locale) ? "rtl" : "ltr";
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} dir={dir} className="h-full">
      <body
        className={cn(
          "font-manrope min-h-full grid grid-rows-[1fr,auto]",
          manrope.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsappChat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
