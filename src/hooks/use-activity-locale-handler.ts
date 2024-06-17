import { useRouter } from "@/lib/i18n.config";
import { useLocale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

type ENFamiliar = {
  fr: string;
  nl: string;
};

type FRFamiliar = {
  en: string;
  nl: string;
};

type NLFamiliar = {
  fr: string;
  nl: string;
};

export type Familiar = ENFamiliar | FRFamiliar | NLFamiliar;

export default function useActivityLocaleHandler(familiars: Familiar) {
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const slug = familiars[locale as keyof typeof familiars];

  const goToTranslatedActivity = useCallback(
    () =>
      router.push(
        {
          params: {
            slug,
          },
          pathname: `/activity/[slug]?${searchParams.toString()}` as any,
        },
        {
          scroll: false,
        }
      ),
    [router, searchParams, slug]
  );

  useEffect(() => {
    const invalidSlug = !slug || params.slug === slug;
    if (!locale || invalidSlug) return;

    goToTranslatedActivity();
  }, [goToTranslatedActivity, locale, params.slug, slug]);
}
