"use server";

import { Metadata } from "next";
import { NamespaceKeys } from "next-intl";
import { getTranslations } from "next-intl/server";

export const getMetadata = async (
  locale: string,
  image: string,
  namespace: NamespaceKeys<
    IntlMessages,
    | "Layout.metaData.resources"
    | "Layout.metaData.who we are"
    | "Layout.metaData.resources"
    | "Layout.metaData.our initiatives"
    | "Layout.metaData.news"
    | "Layout.metaData.donate"
  >
): Promise<Metadata> => {
  const t = await getTranslations({
    locale,
    namespace,
  });
  const description = t("description");

  const graph = {
    images: [image],
    description,
  };

  return {
    title: t("title"),
    description,
    openGraph: graph,
    twitter: graph,
  };
};
