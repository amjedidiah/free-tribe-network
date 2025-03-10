import type { Metadata, ResolvingMetadata, Viewport } from "next";
import "@/styles/globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { PropsWithChildren, Suspense } from "react";
import { cn } from "@/lib/utils";
import WhatsappChat from "@/components/layout/whatsapp-chat";
import manrope from "@/lib/font";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { PropsWithLocaleParam } from "@/lib/types";
import { isRtlLang } from "rtl-detect";
import CookiesConsent from "@/components/layout/cookies-consent";
import { CookiesConsentProvider } from "@/context/cookies-consent-context";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateMetadata(
  { params }: PropsWithLocaleParam,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData.default",
  });
  const previousImages = (await parent).openGraph?.images || [];
  const description = t("description");

  const image =
    {
      en: "https://res.cloudinary.com/amjedidiah/image/upload/v1741559780/ftn/Screenshot-en_idoj6z.png",
      fr: "https://res.cloudinary.com/amjedidiah/image/upload/v1741559779/ftn/Screenshot-fr_sz0pe4.png",
      nl: "https://res.cloudinary.com/amjedidiah/image/upload/v1741559782/ftn/Screenshot-nl_fjhqgn.png",
    }[locale] ??
    "https://res.cloudinary.com/amjedidiah/image/upload/v1741559780/ftn/Screenshot-en_idoj6z.png";

  const graph: OpenGraph = {
    images: [image, ...previousImages],
    description,
    siteName: "Free Tribe Network",
    url: "https://www.freetribenetwork.org",
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
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PropsWithLocaleParam>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = isRtlLang(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="h-full">
      <body
        className={cn(
          "font-manrope min-h-full grid grid-rows-[1fr,auto]",
          manrope.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <CookiesConsentProvider>
            <Suspense>
              <Nav />
            </Suspense>
            <main>{children}</main>
            <Footer />
            <WhatsappChat />
            <CookiesConsent />
          </CookiesConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
