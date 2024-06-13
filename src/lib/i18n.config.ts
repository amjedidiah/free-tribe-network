import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";
import { Locale, LocaleCountry } from "@/lib/types";

export const localeLabels = {
  [LocaleCountry.GB]: Locale.en,
  [LocaleCountry.FR]: Locale.fr,
  [LocaleCountry.NL]: Locale.nl,
};

export const locales = Object.values(localeLabels);
export const defaultLocale = Locale.en;

export const pathnames = {
  "/": "/",

  "/who-we-are?section=our-history": {
    en: "/who-we-are?section=our-history",
    fr: "/qui-nous-sommes?section=notre-histoire",
    nl: "/wie-we-zijn?section=onze-geschiedenis",
  },
  "/who-we-are?section=notre-histoire": {
    en: "/who-we-are?section=our-history",
    fr: "/qui-nous-sommes?section=notre-histoire",
    nl: "/wie-we-zijn?section=onze-geschiedenis",
  },
  "/who-we-are?section=onze-geschiedenis": {
    en: "/who-we-are?section=our-history",
    fr: "/qui-nous-sommes?section=notre-histoire",
    nl: "/wie-we-zijn?section=onze-geschiedenis",
  },

  "/who-we-are?section=mission-vision": {
    en: "/who-we-are?section=mission-vision",
    fr: "/qui-nous-sommes?section=mission",
    nl: "/wie-we-zijn?section=missie",
  },
  "/who-we-are?section=mission": {
    en: "/who-we-are?section=mission-vision",
    fr: "/qui-nous-sommes?section=mission",
    nl: "/wie-we-zijn?section=missie",
  },
  "/who-we-are?section=missie": {
    en: "/who-we-are?section=mission-vision",
    fr: "/qui-nous-sommes?section=mission",
    nl: "/wie-we-zijn?section=missie",
  },

  "/who-we-are?section=what-we-do": {
    en: "/who-we-are?section=what-we-do",
    fr: "/qui-nous-sommes?section=ce-que-nous-faisons",
    nl: "/wie-we-zijn?section=wat-we-doen",
  },
  "/who-we-are?section=ce-que-nous-faisons": {
    en: "/who-we-are?section=what-we-do",
    fr: "/qui-nous-sommes?section=ce-que-nous-faisons",
    nl: "/wie-we-zijn?section=wat-we-doen",
  },
  "/who-we-are?section=wat-we-doen": {
    en: "/who-we-are?section=what-we-do",
    fr: "/qui-nous-sommes?section=ce-que-nous-faisons",
    nl: "/wie-we-zijn?section=wat-we-doen",
  },

  "/who-we-are?section=bot": {
    en: "/who-we-are?section=bot",
    fr: "/qui-nous-sommes?section=bot",
    nl: "/wie-we-zijn?section=bot",
  },

  "/who-we-are?section=staff": {
    en: "/who-we-are?section=staff",
    fr: "/qui-nous-sommes?section=personnel",
    nl: "/wie-we-zijn?section=personeel",
  },
  "/who-we-are?section=personnel": {
    en: "/who-we-are?section=staff",
    fr: "/qui-nous-sommes?section=personnel",
    nl: "/wie-we-zijn?section=personeel",
  },
  "/who-we-are?section=personeel": {
    en: "/who-we-are?section=staff",
    fr: "/qui-nous-sommes?section=personnel",
    nl: "/wie-we-zijn?section=personeel",
  },

  "/who-we-are?section=work-with-us": {
    en: "/who-we-are?section=work-with-us",
    fr: "/qui-nous-sommes?section=travaille-avec-nous",
    nl: "/wie-we-zijn?section=werk-met-ons",
  },
  "/who-we-are?section=travaille-avec-nous": {
    en: "/who-we-are?section=work-with-us",
    fr: "/qui-nous-sommes?section=travaille-avec-nous",
    nl: "/wie-we-zijn?section=werk-met-ons",
  },
  "/who-we-are?section=werk-met-ons": {
    en: "/who-we-are?section=work-with-us",
    fr: "/qui-nous-sommes?section=travaille-avec-nous",
    nl: "/wie-we-zijn?section=werk-met-ons",
  },

  "/who-we-are?section=testimonials": {
    en: "/who-we-are?section=testimonials",
    fr: "/qui-nous-sommes?section=temoignages",
    nl: "/wie-we-zijn?section=getuigenissen",
  },
  "/who-we-are?section=temoignages": {
    en: "/who-we-are?section=testimonials",
    fr: "/qui-nous-sommes?section=temoignages",
    nl: "/wie-we-zijn?section=getuigenissen",
  },
  "/who-we-are?section=getuigenissen": {
    en: "/who-we-are?section=testimonials",
    fr: "/qui-nous-sommes?section=temoignages",
    nl: "/wie-we-zijn?section=getuigenissen",
  },

  "/who-we-are": {
    en: "/who-we-are",
    fr: "/qui-nous-sommes",
    nl: "/wie-we-zijn",
  },

  "/our-initiatives?section=star-project": {
    en: "/our-initiatives?section=star-project",
    fr: "/nos-initiatives?section=projet-star",
    nl: "/onze-initiatieven?section=ster-project",
  },
  "/our-initiatives?section=projet-star": {
    en: "/our-initiatives?section=star-project",
    fr: "/nos-initiatives?section=projet-star",
    nl: "/onze-initiatieven?section=ster-project",
  },
  "/our-initiatives?section=ster-project": {
    en: "/our-initiatives?section=star-project",
    fr: "/nos-initiatives?section=projet-star",
    nl: "/onze-initiatieven?section=ster-project",
  },

  "/our-initiatives?section=repromatters": {
    en: "/our-initiatives?section=repromatters",
    fr: "/nos-initiatives?section=questions-de-reproduction",
    nl: "/onze-initiatieven?section=reprozaken",
  },
  "/our-initiatives?section=questions-de-reproduction": {
    en: "/our-initiatives?section=repromatters",
    fr: "/nos-initiatives?section=questions-de-reproduction",
    nl: "/onze-initiatieven?section=reprozaken",
  },
  "/our-initiatives?section=reprozaken": {
    en: "/our-initiatives?section=repromatters",
    fr: "/nos-initiatives?section=questions-de-reproduction",
    nl: "/onze-initiatieven?section=reprozaken",
  },

  "/our-initiatives?section=free-tribe-boost-camp": {
    en: "/our-initiatives?section=free-tribe-boost-camp",
    fr: "/nos-initiatives?section=boost-camp-de-free-tribe",
    nl: "/onze-initiatieven?section=boostkamp-van-free-tribe",
  },
  "/our-initiatives?section=boost-camp-de-free-tribe": {
    en: "/our-initiatives?section=free-tribe-boost-camp",
    fr: "/nos-initiatives?section=boost-camp-de-free-tribe",
    nl: "/onze-initiatieven?section=boostkamp-van-free-tribe",
  },
  "/our-initiatives?section=boostkamp-van-free-tribe": {
    en: "/our-initiatives?section=free-tribe-boost-camp",
    fr: "/nos-initiatives?section=boost-camp-de-free-tribe",
    nl: "/onze-initiatieven?section=boostkamp-van-free-tribe",
  },

  "/our-initiatives?section=free-tribe-helpline": {
    en: "/our-initiatives?section=free-tribe-helpline",
    fr: "/nos-initiatives?section=ligne-dassistance-la-free-tribe",
    nl: "/onze-initiatieven?section=free-tribe-hulplijn",
  },
  "/our-initiatives?section=ligne-dassistance-la-free-tribe": {
    en: "/our-initiatives?section=free-tribe-helpline",
    fr: "/nos-initiatives?section=ligne-dassistance-la-free-tribe",
    nl: "/onze-initiatieven?section=free-tribe-hulplijn",
  },
  "/our-initiatives?section=free-tribe-hulplijn": {
    en: "/our-initiatives?section=free-tribe-helpline",
    fr: "/nos-initiatives?section=ligne-dassistance-la-free-tribe",
    nl: "/onze-initiatieven?section=free-tribe-hulplijn",
  },

  "/our-initiatives?section=free-tribe-clubs": {
    en: "/our-initiatives?section=free-tribe-clubs",
    fr: "/nos-initiatives?section=clubs-de-free-tribe",
    nl: "/onze-initiatieven?section=free-tribe-clubs",
  },
  "/our-initiatives?section=clubs-de-free-tribe": {
    en: "/our-initiatives?section=free-tribe-clubs",
    fr: "/nos-initiatives?section=clubs-de-free-tribe",
    nl: "/onze-initiatieven?section=free-tribe-clubs",
  },

  "/our-initiatives?section=rfh-advocacy": {
    en: "/our-initiatives?section=rfh-advocacy",
    fr: "/nos-initiatives?section=plaidoyer-rfh",
    nl: "/onze-initiatieven?section=rfh-belangenbehartiging",
  },
  "/our-initiatives?section=plaidoyer-rfh": {
    en: "/our-initiatives?section=rfh-advocacy",
    fr: "/nos-initiatives?section=plaidoyer-rfh",
    nl: "/onze-initiatieven?section=rfh-belangenbehartiging",
  },
  "/our-initiatives?section=rfh-belangenbehartiging": {
    en: "/our-initiatives?section=rfh-advocacy",
    fr: "/nos-initiatives?section=plaidoyer-rfh",
    nl: "/onze-initiatieven?section=rfh-belangenbehartiging",
  },

  "/our-initiatives": {
    en: "/our-initiatives",
    fr: "/nos-initiatives",
    nl: "/onze-initiatieven",
  },

  "/news-events?initiative=star-project": {
    en: "/news-events?initiative=star-project",
    fr: "/nouvelles?initiative=projet-star",
    nl: "/nieuws?initiative=star-project",
  },
  "/news-events?initiative=projet-star": {
    en: "/news-events?initiative=star-project",
    fr: "/nouvelles?initiative=projet-star",
    nl: "/nieuws?initiative=star-project",
  },

  "/news-events?initiative=repromatters": {
    en: "/news-events?initiative=repromatters",
    fr: "/nouvelles?initiative=questions-de-reproduction",
    nl: "/nieuws?initiative=repromatters",
  },
  "/news-events?initiative=questions-de-reproduction": {
    en: "/news-events?initiative=repromatters",
    fr: "/nouvelles?initiative=questions-de-reproduction",
    nl: "/nieuws?initiative=repromatters",
  },

  "/news-events?initiative=free-tribe-boost-camp": {
    en: "/news-events?initiative=free-tribe-boost-camp",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe",
  },
  "/news-events?initiative=boost-camp-de-free-tribe": {
    en: "/news-events?initiative=free-tribe-boost-camp",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe",
  },
  "/news-events?initiative=boostkamp-van-free-tribe": {
    en: "/news-events?initiative=free-tribe-boost-camp",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe",
  },

  "/news-events?initiative=free-tribe-helpline": {
    en: "/news-events?initiative=free-tribe-helpline",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?initiative=free-tribe-hulplijn",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe": {
    en: "/news-events?initiative=free-tribe-helpline",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?initiative=free-tribe-hulplijn",
  },
  "/news-events?initiative=free-tribe-hulplijn": {
    en: "/news-events?initiative=free-tribe-helpline",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?initiative=free-tribe-hulplijn",
  },

  "/news-events?initiative=free-tribe-clubs": {
    en: "/news-events?initiative=free-tribe-clubs",
    fr: "/nouvelles?initiative=clubs-de-free-tribe",
    nl: "/nieuws?initiative=free-tribe-clubs",
  },
  "/news-events?initiative=clubs-de-free-tribe": {
    en: "/news-events?initiative=free-tribe-clubs",
    fr: "/nouvelles?initiative=clubs-de-free-tribe",
    nl: "/nieuws?initiative=free-tribe-clubs",
  },

  "/news-events?initiative=rfh-advocacy": {
    en: "/news-events?initiative=rfh-advocacy",
    fr: "/nouvelles?initiative=plaidoyer-rfh",
    nl: "/nieuws?initiative=rfh-belangenbehartiging",
  },
  "/news-events?initiative=plaidoyer-rfh": {
    en: "/news-events?initiative=rfh-advocacy",
    fr: "/nouvelles?initiative=plaidoyer-rfh",
    nl: "/nieuws?initiative=rfh-belangenbehartiging",
  },
  "/news-events?initiative=rfh-belangenbehartiging": {
    en: "/news-events?initiative=rfh-advocacy",
    fr: "/nouvelles?initiative=plaidoyer-rfh",
    nl: "/nieuws?initiative=rfh-belangenbehartiging",
  },

  "/news-events?section=recent-activities": {
    en: "/news-events?section=recent-activities",
    fr: "/nouvelles?section=activites-recentes",
    nl: "/nieuws?section=recente-activiteiten",
  },
  "/news-events?section=activites-recentes": {
    en: "/news-events?section=recent-activities",
    fr: "/nouvelles?section=activites-recentes",
    nl: "/nieuws?section=recente-activiteiten",
  },
  "/news-events?section=recente-activiteiten": {
    en: "/news-events?section=recent-activities",
    fr: "/nouvelles?section=activites-recentes",
    nl: "/nieuws?section=recente-activiteiten",
  },

  "/news-events?section=upcoming-activities": {
    en: "/news-events?section=upcoming-activities",
    fr: "/nouvelles?section=activites-a-venir",
    nl: "/nieuws?section=aankomende-activiteiten",
  },
  "/news-events?section=activites-a-venir": {
    en: "/news-events?section=upcoming-activities",
    fr: "/nouvelles?section=activites-a-venir",
    nl: "/nieuws?section=aankomende-activiteiten",
  },
  "/news-events?section=aankomende-activiteiten": {
    en: "/news-events?section=upcoming-activities",
    fr: "/nouvelles?section=activites-a-venir",
    nl: "/nieuws?section=aankomende-activiteiten",
  },

  "/news-events?section=blog-posts": {
    en: "/news-events?section=blog-posts",
    fr: "/nouvelles?section=articles-de-blog",
    nl: "/nieuws?section=blog-berichten",
  },
  "/news-events?section=articles-de-blog": {
    en: "/news-events?section=blog-posts",
    fr: "/nouvelles?section=articles-de-blog",
    nl: "/nieuws?section=blog-berichten",
  },
  "/news-events?section=blog-berichten": {
    en: "/news-events?section=blog-posts",
    fr: "/nouvelles?section=articles-de-blog",
    nl: "/nieuws?section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=star-project": {
    en: "/news-events?section=blog-posts&initiative=star-project",
    fr: "/nouvelles?section=articles-de-blog&initiative=projet-star",
    nl: "/nieuws?section=blog-berichten&initiative=star-project",
  },
  "/news-events?section=articles-de-blog&initiative=projet-star": {
    en: "/news-events?section=blog-posts&initiative=star-project",
    fr: "/nouvelles?section=articles-de-blog&initiative=projet-star",
    nl: "/nieuws?section=blog-berichten&initiative=star-project",
  },
  "/news-events?section=blog-berichten&initiative=star-project": {
    en: "/news-events?section=blog-posts&initiative=star-project",
    fr: "/nouvelles?section=articles-de-blog&initiative=projet-star",
    nl: "/nieuws?section=blog-berichten&initiative=star-project",
  },

  "/news-events?initiative=star-project&section=blog-posts": {
    en: "/news-events?initiative=star-project&section=blog-posts",
    fr: "/nouvelles?initiative=projet-star&section=articles-de-blog",
    nl: "/nieuws?initiative=star-project&section=blog-berichten",
  },
  "/news-events?initiative=projet-star&section=articles-de-blog": {
    en: "/news-events?initiative=star-project&section=blog-posts",
    fr: "/nouvelles?initiative=projet-star&section=articles-de-blog",
    nl: "/nieuws?initiative=star-project&section=blog-berichten",
  },
  "/news-events?initiative=star-project&section=blog-berichten": {
    en: "/news-events?initiative=star-project&section=blog-posts",
    fr: "/nouvelles?initiative=projet-star&section=articles-de-blog",
    nl: "/nieuws?initiative=star-project&section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=repromatters": {
    en: "/news-events?section=blog-posts&initiative=repromatters",
    fr: "/nouvelles?section=articles-de-blog&initiative=questions-de-reproduction",
    nl: "/nieuws?section=blog-berichten&initiative=repromatters",
  },
  "/news-events?section=articles-de-blog&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=blog-posts&initiative=repromatters",
      fr: "/nouvelles?section=articles-de-blog&initiative=questions-de-reproduction",
      nl: "/nieuws?section=blog-berichten&initiative=repromatters",
    },
  "/news-events?section=blog-berichten&initiative=repromatters": {
    en: "/news-events?section=blog-posts&initiative=repromatters",
    fr: "/nouvelles?section=articles-de-blog&initiative=questions-de-reproduction",
    nl: "/nieuws?section=blog-berichten&initiative=repromatters",
  },

  "/news-events?initiative=repromatters&section=blog-posts": {
    en: "/news-events?initiative=repromatters&section=blog-posts",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=articles-de-blog",
    nl: "/nieuws?initiative=repromatters&section=blog-berichten",
  },
  "/news-events?initiative=questions-de-reproduction&section=articles-de-blog":
    {
      en: "/news-events?initiative=repromatters&section=blog-posts",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=articles-de-blog",
      nl: "/nieuws?initiative=repromatters&section=blog-berichten",
    },
  "/news-events?initiative=repromatters&section=blog-berichten": {
    en: "/news-events?initiative=repromatters&section=blog-posts",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=articles-de-blog",
    nl: "/nieuws?initiative=repromatters&section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=articles-de-blog&initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=boostkamp-van-free-tribe",
  },
  "/news-events?section=articles-de-blog&initiative=boost-camp-de-free-tribe": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=articles-de-blog&initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=boostkamp-van-free-tribe",
  },
  "/news-events?section=blog-berichten&initiative=boostkamp-van-free-tribe": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=articles-de-blog&initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=boostkamp-van-free-tribe",
  },

  "/news-events?initiative=free-tribe-boost-camp&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=blog-posts",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=blog-berichten",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=articles-de-blog": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=blog-posts",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=blog-berichten",
  },
  "/news-events?initiative=boostkamp-van-free-tribe&section=blog-berichten": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=blog-posts",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=free-tribe-helpline": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=free-tribe-hulplijn",
  },
  "/news-events?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=blog-posts&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe",
      nl: "/nieuws?section=blog-berichten&initiative=free-tribe-hulplijn",
    },
  "/news-events?section=blog-berichten&initiative=free-tribe-hulplijn": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=free-tribe-hulplijn",
  },

  "/news-events?initiative=free-tribe-helpline&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-helpline&section=blog-posts",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=free-tribe-hulplijn&section=blog-berichten",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=blog-posts",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog",
      nl: "/nieuws?initiative=free-tribe-hulplijn&section=blog-berichten",
    },
  "/news-events?initiative=free-tribe-hulplijn&section=blog-berichten": {
    en: "/news-events?initiative=free-tribe-helpline&section=blog-posts",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=free-tribe-hulplijn&section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=free-tribe-clubs": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=articles-de-blog&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=free-tribe-clubs",
  },
  "/news-events?section=articles-de-blog&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=articles-de-blog&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=free-tribe-clubs",
  },
  "/news-events?section=blog-berichten&initiative=free-tribe-clubs": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=articles-de-blog&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=blog-berichten&initiative=free-tribe-clubs",
  },

  "/news-events?initiative=free-tribe-clubs&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-clubs&section=blog-posts",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=free-tribe-clubs&section=blog-berichten",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=articles-de-blog": {
    en: "/news-events?initiative=free-tribe-clubs&section=blog-posts",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=free-tribe-clubs&section=blog-berichten",
  },
  "/news-events?initiative=free-tribe-clubs&section=blog-berichten": {
    en: "/news-events?initiative=free-tribe-clubs&section=blog-posts",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=articles-de-blog",
    nl: "/nieuws?initiative=free-tribe-clubs&section=blog-berichten",
  },

  "/news-events?section=blog-posts&initiative=rfh-advocacy": {
    en: "/news-events?section=blog-posts&initiative=rfh-advocacy",
    fr: "/nouvelles?section=articles-de-blog&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=blog-berichten&initiative=rfh-belangenbehartiging",
  },
  "/news-events?section=articles-de-blog&initiative=plaidoyer-rfh": {
    en: "/news-events?section=blog-posts&initiative=rfh-advocacy",
    fr: "/nouvelles?section=articles-de-blog&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=blog-berichten&initiative=rfh-belangenbehartiging",
  },
  "/news-events?section=blog-berichten&initiative=rfh-belangenbehartiging": {
    en: "/news-events?section=blog-posts&initiative=rfh-advocacy",
    fr: "/nouvelles?section=articles-de-blog&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=blog-berichten&initiative=rfh-belangenbehartiging",
  },

  "/news-events?initiative=rfh-advocacy&section=blog-posts": {
    en: "/news-events?initiative=rfh-advocacy&section=blog-posts",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=articles-de-blog",
    nl: "/nieuws?initiative=rfh-belangenbehartiging&section=blog-berichten",
  },
  "/news-events?initiative=plaidoyer-rfh&section=articles-de-blog": {
    en: "/news-events?initiative=rfh-advocacy&section=blog-posts",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=articles-de-blog",
    nl: "/nieuws?initiative=rfh-belangenbehartiging&section=blog-berichten",
  },
  "/news-events?initiative=rfh-belangenbehartiging&section=blog-berichten": {
    en: "/news-events?initiative=rfh-advocacy&section=blog-posts",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=articles-de-blog",
    nl: "/nieuws?initiative=rfh-belangenbehartiging&section=blog-berichten",
  },

  "/news-events?section=upcoming-activities&initiative=star-project": {
    en: "/news-events?section=upcoming-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-a-venir&initiative=projet-star",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=star-project",
  },
  "/news-events?section=activites-a-venir&initiative=projet-star": {
    en: "/news-events?section=upcoming-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-a-venir&initiative=projet-star",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=star-project",
  },
  "/news-events?section=aankomende-activiteiten&initiative=star-project": {
    en: "/news-events?section=upcoming-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-a-venir&initiative=projet-star",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=star-project",
  },

  "/news-events?initiative=star-project&section=upcoming-activities": {
    en: "/news-events?initiative=star-project&section=upcoming-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-a-venir",
    nl: "/nieuws?initiative=star-project&aankomende-activiteiten",
  },
  "/news-events?initiative=projet-star&section=activites-a-venir": {
    en: "/news-events?initiative=star-project&section=upcoming-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-a-venir",
    nl: "/nieuws?initiative=star-project&aankomende-activiteiten",
  },
  "/news-events?initiative=star-project&aankomende-activiteiten": {
    en: "/news-events?initiative=star-project&section=upcoming-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-a-venir",
    nl: "/nieuws?initiative=star-project&aankomende-activiteiten",
  },

  "/news-events?section=upcoming-activities&initiative=repromatters": {
    en: "/news-events?section=upcoming-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-a-venir&initiative=questions-de-reproduction",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=repromatters",
  },
  "/news-events?section=activites-a-venir&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=upcoming-activities&initiative=repromatters",
      fr: "/nouvelles?section=activites-a-venir&initiative=questions-de-reproduction",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=repromatters",
    },
  "/news-events?section=aankomende-activiteiten&initiative=repromatters": {
    en: "/news-events?section=upcoming-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-a-venir&initiative=questions-de-reproduction",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=repromatters",
  },

  "/news-events?initiative=repromatters&section=upcoming-activities": {
    en: "/news-events?initiative=repromatters&section=upcoming-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-a-venir",
    nl: "/nieuws?initiative=repromatters&section=aankomende-activiteiten",
  },
  "/news-events?initiative=questions-de-reproduction&section=activites-a-venir":
    {
      en: "/news-events?initiative=repromatters&section=upcoming-activities",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-a-venir",
      nl: "/nieuws?initiative=repromatters&section=aankomende-activiteiten",
    },
  "/news-events?initiative=repromatters&section=aankomende-activiteiten": {
    en: "/news-events?initiative=repromatters&section=upcoming-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-a-venir",
    nl: "/nieuws?initiative=repromatters&section=aankomende-activiteiten",
  },

  "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=activites-a-venir&initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=boostkamp-van-free-tribe",
  },
  "/news-events?section=activites-a-venir&initiative=boost-camp-de-free-tribe":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-a-venir&initiative=boost-camp-de-free-tribe",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=boostkamp-van-free-tribe",
    },
  "/news-events?section=aankomende-activiteiten&initiative=boostkamp-van-free-tribe":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-a-venir&initiative=boost-camp-de-free-tribe",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=boostkamp-van-free-tribe",
    },

  "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-a-venir",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=aankomende-activiteiten",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=activites-a-venir":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-a-venir",
      nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=aankomende-activiteiten",
    },
  "/news-events?initiative=boostkamp-van-free-tribe&section=aankomende-activiteiten":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-a-venir",
      nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=aankomende-activiteiten",
    },

  "/news-events?section=upcoming-activities&initiative=free-tribe-helpline": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-hulplijn",
  },
  "/news-events?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-hulplijn",
    },
  "/news-events?section=aankomende-activiteiten&initiative=free-tribe-hulplijn":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-hulplijn",
    },

  "/news-events?initiative=free-tribe-helpline&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-helpline&section=upcoming-activities",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir",
    nl: "/nieuws?initiative=free-tribe-hulplijn&section=aankomende-activiteiten",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=upcoming-activities",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir",
      nl: "/nieuws?initiative=free-tribe-hulplijn&section=aankomende-activiteiten",
    },
  "/news-events?initiative=free-tribe-hulplijn&section=aankomende-activiteiten":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=upcoming-activities",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir",
      nl: "/nieuws?initiative=free-tribe-hulplijn&section=aankomende-activiteiten",
    },

  "/news-events?section=upcoming-activities&initiative=free-tribe-clubs": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-a-venir&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-clubs",
  },
  "/news-events?section=activites-a-venir&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-a-venir&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-clubs",
  },
  "/news-events?section=aankomende-activiteiten&initiative=free-tribe-clubs": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-a-venir&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=free-tribe-clubs",
  },

  "/news-events?initiative=free-tribe-clubs&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-clubs&section=upcoming-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-a-venir",
    nl: "/nieuws?initiative=free-tribe-clubs&section=aankomende-activiteiten",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=activites-a-venir": {
    en: "/news-events?initiative=free-tribe-clubs&section=upcoming-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-a-venir",
    nl: "/nieuws?initiative=free-tribe-clubs&section=aankomende-activiteiten",
  },
  "/news-events?initiative=free-tribe-clubs&section=aankomende-activiteiten": {
    en: "/news-events?initiative=free-tribe-clubs&section=upcoming-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-a-venir",
    nl: "/nieuws?initiative=free-tribe-clubs&section=aankomende-activiteiten",
  },

  "/news-events?section=upcoming-activities&initiative=rfh-advocacy": {
    en: "/news-events?section=upcoming-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-a-venir&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=rfh-belangenbehartiging",
  },
  "/news-events?section=activites-a-venir&initiative=plaidoyer-rfh": {
    en: "/news-events?section=upcoming-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-a-venir&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=aankomende-activiteiten&initiative=rfh-belangenbehartiging",
  },
  "/news-events?section=aankomende-activiteiten&initiative=rfh-belangenbehartiging":
    {
      en: "/news-events?section=upcoming-activities&initiative=rfh-advocacy",
      fr: "/nouvelles?section=activites-a-venir&initiative=plaidoyer-rfh",
      nl: "/nieuws?section=aankomende-activiteiten&initiative=rfh-belangenbehartiging",
    },

  "/news-events?initiative=rfh-advocacy&section=upcoming-activities": {
    en: "/news-events?initiative=rfh-advocacy&section=upcoming-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-a-venir",
    nl: "/nieuws?initiative=rfh-belangenbehartiging&section=aankomende-activiteiten",
  },
  "/news-events?initiative=plaidoyer-rfh&section=activites-a-venir": {
    en: "/news-events?initiative=rfh-advocacy&section=upcoming-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-a-venir",
    nl: "/nieuws?initiative=rfh-belangenbehartiging&section=aankomende-activiteiten",
  },
  "/news-events?initiative=rfh-belangenbehartiging&section=aankomende-activiteiten":
    {
      en: "/news-events?initiative=rfh-advocacy&section=upcoming-activities",
      fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-a-venir",
      nl: "/nieuws?initiative=rfh-belangenbehartiging&section=aankomende-activiteiten",
    },

  "/news-events?section=recent-activities&initiative=star-project": {
    en: "/news-events?section=recent-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-recentes&initiative=projet-star",
    nl: "/nieuws?section=recente-activiteiten&initiative=star-project",
  },
  "/news-events?section=activites-recentes&initiative=projet-star": {
    en: "/news-events?section=recent-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-recentes&initiative=projet-star",
    nl: "/nieuws?section=recente-activiteiten&initiative=star-project",
  },
  "/news-events?section=recente-activiteiten&initiative=star-project": {
    en: "/news-events?section=recent-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-recentes&initiative=projet-star",
    nl: "/nieuws?section=recente-activiteiten&initiative=star-project",
  },

  "/news-events?initiative=star-project&section=recent-activities": {
    en: "/news-events?initiative=star-project&section=recent-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-recentes",
    nl: "/nieuws?initiative=star-project&section=recente-activiteiten",
  },
  "/news-events?initiative=projet-star&section=activites-recentes": {
    en: "/news-events?initiative=star-project&section=recent-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-recentes",
    nl: "/nieuws?initiative=star-project&section=recente-activiteiten",
  },
  "/news-events?initiative=star-project&section=recente-activiteiten": {
    en: "/news-events?initiative=star-project&section=recent-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-recentes",
    nl: "/nieuws?initiative=star-project&section=recente-activiteiten",
  },

  "/news-events?section=recent-activities&initiative=repromatters": {
    en: "/news-events?section=recent-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-recentes&initiative=questions-de-reproduction",
    nl: "/nieuws?section=recente-activiteiten&initiative=repromatters",
  },
  "/news-events?section=activites-recentes&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=recent-activities&initiative=repromatters",
      fr: "/nouvelles?section=activites-recentes&initiative=questions-de-reproduction",
      nl: "/nieuws?section=recente-activiteiten&initiative=repromatters",
    },
  "/news-events?section=recente-activiteiten&initiative=repromatters": {
    en: "/news-events?section=recent-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-recentes&initiative=questions-de-reproduction",
    nl: "/nieuws?section=recente-activiteiten&initiative=repromatters",
  },

  "/news-events?initiative=repromatters&section=recent-activities": {
    en: "/news-events?initiative=repromatters&section=recent-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-recentes",
    nl: "/nieuws?initiative=repromatters&section=recente-activiteiten",
  },
  "/news-events?initiative=questions-de-reproduction&section=activites-recentes":
    {
      en: "/news-events?initiative=repromatters&section=recent-activities",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-recentes",
      nl: "/nieuws?initiative=repromatters&section=recente-activiteiten",
    },
  "/news-events?initiative=repromatters&section=recente-activiteiten": {
    en: "/news-events?initiative=repromatters&section=recent-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-recentes",
    nl: "/nieuws?initiative=repromatters&section=recente-activiteiten",
  },

  "/news-events?section=recent-activities&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=activites-recentes&initiative=boost-camp-de-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=boostkamp-van-free-tribe",
  },
  "/news-events?section=activites-recentes&initiative=boost-camp-de-free-tribe":
    {
      en: "/news-events?section=recent-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-recentes&initiative=boost-camp-de-free-tribe",
      nl: "/nieuws?section=recente-activiteiten&initiative=boostkamp-van-free-tribe",
    },
  "/news-events?section=recente-activiteiten&initiative=boostkamp-van-free-tribe":
    {
      en: "/news-events?section=recent-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-recentes&initiative=boost-camp-de-free-tribe",
      nl: "/nieuws?section=recente-activiteiten&initiative=boostkamp-van-free-tribe",
    },

  "/news-events?initiative=free-tribe-boost-camp&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=recent-activities",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=recente-activiteiten",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=activites-recentes":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=recent-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-recentes",
      nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=recente-activiteiten",
    },
  "/news-events?initiative=boostkamp-van-free-tribe&section=recente-activiteiten":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=recent-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-recentes",
      nl: "/nieuws?initiative=boostkamp-van-free-tribe&section=recente-activiteiten",
    },

  "/news-events?section=recent-activities&initiative=free-tribe-helpline": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-hulplijn",
  },
  "/news-events?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=recent-activities&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe",
      nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-hulplijn",
    },
  "/news-events?section=recente-activiteiten&initiative=free-tribe-hulplijn": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-hulplijn",
  },

  "/news-events?initiative=free-tribe-helpline&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-helpline&section=recent-activities",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=free-tribe-hulplijn&section=recente-activiteiten",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=recent-activities",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes",
      nl: "/nieuws?initiative=free-tribe-hulplijn&section=recente-activiteiten",
    },
  "/news-events?initiative=free-tribe-hulplijn&section=recente-activiteiten": {
    en: "/news-events?initiative=free-tribe-helpline&section=recent-activities",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=free-tribe-hulplijn&section=recente-activiteiten",
  },

  "/news-events?section=recent-activities&initiative=free-tribe-clubs": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-recentes&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-clubs",
  },
  "/news-events?section=activites-recentes&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-recentes&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-clubs",
  },
  "/news-events?section=recente-activiteiten&initiative=free-tribe-clubs": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-recentes&initiative=clubs-de-free-tribe",
    nl: "/nieuws?section=recente-activiteiten&initiative=free-tribe-clubs",
  },

  "/news-events?initiative=free-tribe-clubs&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-clubs&section=recent-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=free-tribe-clubs&section=recente-activiteiten",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=activites-recentes": {
    en: "/news-events?initiative=free-tribe-clubs&section=recent-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=free-tribe-clubs&section=recente-activiteiten",
  },
  "/news-events?initiative=free-tribe-clubs&section=recente-activiteiten": {
    en: "/news-events?initiative=free-tribe-clubs&section=recent-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-recentes",
    nl: "/nieuws?initiative=free-tribe-clubs&section=recente-activiteiten",
  },

  "/news-events?section=recent-activities&initiative=rfh-advocacy": {
    en: "/news-events?section=recent-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-recentes&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=recente-activiteiten&initiative=rFH-belangenbehartiging",
  },
  "/news-events?section=activites-recentes&initiative=plaidoyer-rfh": {
    en: "/news-events?section=recent-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-recentes&initiative=plaidoyer-rfh",
    nl: "/nieuws?section=recente-activiteiten&initiative=rFH-belangenbehartiging",
  },
  "/news-events?section=recente-activiteiten&initiative=rFH-belangenbehartiging":
    {
      en: "/news-events?section=recent-activities&initiative=rfh-advocacy",
      fr: "/nouvelles?section=activites-recentes&initiative=plaidoyer-rfh",
      nl: "/nieuws?section=recente-activiteiten&initiative=rFH-belangenbehartiging",
    },

  "/news-events?initiative=rfh-advocacy&section=recent-activities": {
    en: "/news-events?initiative=rfh-advocacy&section=recent-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-recentes",
    nl: "/nieuws?initiative=rFH-belangenbehartiging&section=recente-activiteiten",
  },
  "/news-events?initiative=plaidoyer-rfh&section=activites-recentes": {
    en: "/news-events?initiative=rfh-advocacy&section=recent-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-recentes",
    nl: "/nieuws?initiative=rFH-belangenbehartiging&section=recente-activiteiten",
  },
  "/news-events?initiative=rFH-belangenbehartiging&section=recente-activiteiten":
    {
      en: "/news-events?initiative=rfh-advocacy&section=recent-activities",
      fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-recentes",
      nl: "/nieuws?initiative=rfh-belangenbehartiging&section=recente-activiteiten",
    },

  "/news-events": {
    en: "/news-events",
    fr: "/nouvelles",
    nl: "/nieuws",
  },
  "/resources": {
    en: "/resources",
    fr: "/ressources",
    nl: "/bronnen",
  },
  "/donate": {
    en: "/donate",
    fr: "/faire-un-don",
    nl: "/doneer",
  },
  "/activity": {
    en: "/activity",
    fr: "/activite",
    nl: "/activiteit",
  },

  "/activity/[slug]?section=recent-activities": {
    en: "/activity/[slug]?section=recent-activities",
    fr: "/activite/[slug]?section=activites-recentes",
    nl: "/activiteit/[slug]?section=recente-activiteiten",
  },
  "/activity/[slug]?section=activites-recentes": {
    en: "/activity/[slug]?section=recent-activities",
    fr: "/activite/[slug]?section=activites-recentes",
    nl: "/activiteit/[slug]?section=recente-activiteiten",
  },
  "/activity/[slug]?section=recente-activiteiten": {
    en: "/activity/[slug]?section=recent-activities",
    fr: "/activite/[slug]?section=activites-recentes",
    nl: "/activiteit/[slug]?section=recente-activiteiten",
  },

  "/activity/[slug]?section=upcoming-activities": {
    en: "/activity/[slug]?section=upcoming-activities",
    fr: "/activite/[slug]?section=activites-a-venir",
    nl: "/activiteit/[slug]?section=komende-activiteiten",
  },
  "/activity/[slug]?section=activites-a-venir": {
    en: "/activity/[slug]?section=upcoming-activities",
    fr: "/activite/[slug]?section=activites-a-venir",
    nl: "/activiteit/[slug]?section=komende-activiteiten",
  },
  "/activity/[slug]?section=komende-activiteiten": {
    en: "/activity/[slug]?section=upcoming-activities",
    fr: "/activite/[slug]?section=activites-a-venir",
    nl: "/activiteit/[slug]?section=komende-activiteiten",
  },

  "/activity/[slug]": {
    en: "/activity/[slug]",
    fr: "/activite/[slug]",
    nl: "/activiteit/[slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
