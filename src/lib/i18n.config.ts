import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";
import { Locale, LocaleCountry } from "@/lib/types";

export const localeLabels = {
  [LocaleCountry.GB]: Locale.en,
  [LocaleCountry.FR]: Locale.fr,
};

export const locales = Object.values(localeLabels);
export const defaultLocale = Locale.en;

export const pathnames = {
  "/": "/",

  "/who-we-are?section=our-history": {
    en: "/who-we-are?section=our-history",
    fr: "/qui-nous-sommes?section=notre-histoire",
  },
  "/who-we-are?section=notre-histoire": {
    en: "/who-we-are?section=our-history",
    fr: "/qui-nous-sommes?section=notre-histoire",
  },

  "/who-we-are?section=mission-vision": {
    en: "/who-we-are?section=mission-vision",
    fr: "/qui-nous-sommes?section=mission",
  },
  "/who-we-are?section=mission": {
    en: "/who-we-are?section=mission-vision",
    fr: "/qui-nous-sommes?section=mission",
  },

  "/who-we-are?section=what-we-do": {
    en: "/who-we-are?section=what-we-do",
    fr: "/qui-nous-sommes?section=ce-que-nous-faisons",
  },
  "/who-we-are?section=ce-que-nous-faisons": {
    en: "/who-we-are?section=what-we-do",
    fr: "/qui-nous-sommes?section=ce-que-nous-faisons",
  },

  "/who-we-are?section=bot": {
    en: "/who-we-are?section=bot",
    fr: "/qui-nous-sommes?section=bot",
  },

  "/who-we-are?section=staff": {
    en: "/who-we-are?section=staff",
    fr: "/qui-nous-sommes?section=personnel",
  },
  "/who-we-are?section=personnel": {
    en: "/who-we-are?section=staff",
    fr: "/qui-nous-sommes?section=personnel",
  },

  "/who-we-are?section=work-with-us": {
    en: "/who-we-are?section=work-with-us",
    fr: "/qui-nous-sommes?section=travaille-avec-nous",
  },
  "/who-we-are?section=travaille-avec-nous": {
    en: "/who-we-are?section=work-with-us",
    fr: "/qui-nous-sommes?section=travaille-avec-nous",
  },

  "/who-we-are?section=testimonials": {
    en: "/who-we-are?section=testimonials",
    fr: "/qui-nous-sommes?section=temoignages",
  },
  "/who-we-are?section=temoignages": {
    en: "/who-we-are?section=testimonials",
    fr: "/qui-nous-sommes?section=temoignages",
  },

  "/who-we-are": {
    en: "/who-we-are",
    fr: "/qui-nous-sommes",
  },

  "/our-initiatives?section=star-project": {
    en: "/our-initiatives?section=star-project",
    fr: "/nos-initiatives?section=projet-star",
  },
  "/our-initiatives?section=projet-star": {
    en: "/our-initiatives?section=star-project",
    fr: "/nos-initiatives?section=projet-star",
  },

  "/our-initiatives?section=repromatters": {
    en: "/our-initiatives?section=repromatters",
    fr: "/nos-initiatives?section=questions-de-reproduction",
  },
  "/our-initiatives?section=questions-de-reproduction": {
    en: "/our-initiatives?section=repromatters",
    fr: "/nos-initiatives?section=questions-de-reproduction",
  },

  "/our-initiatives?section=free-tribe-boost-camp": {
    en: "/our-initiatives?section=free-tribe-boost-camp",
    fr: "/nos-initiatives?section=boost-camp-de-free-tribe",
  },
  "/our-initiatives?section=boost-camp-de-free-tribe": {
    en: "/our-initiatives?section=free-tribe-boost-camp",
    fr: "/nos-initiatives?section=boost-camp-de-free-tribe",
  },

  "/our-initiatives?section=free-tribe-helpline": {
    en: "/our-initiatives?section=free-tribe-helpline",
    fr: "/nos-initiatives?section=ligne-dassistance-la-free-tribe",
  },
  "/our-initiatives?section=ligne-dassistance-la-free-tribe": {
    en: "/our-initiatives?section=free-tribe-helpline",
    fr: "/nos-initiatives?section=ligne-dassistance-la-free-tribe",
  },

  "/our-initiatives?section=free-tribe-clubs": {
    en: "/our-initiatives?section=free-tribe-clubs",
    fr: "/nos-initiatives?section=clubs-de-free-tribe",
  },
  "/our-initiatives?section=clubs-de-free-tribe": {
    en: "/our-initiatives?section=free-tribe-clubs",
    fr: "/nos-initiatives?section=clubs-de-free-tribe",
  },

  "/our-initiatives?section=rfh-advocacy": {
    en: "/our-initiatives?section=rfh-advocacy",
    fr: "/nos-initiatives?section=plaidoyer-rfh",
  },
  "/our-initiatives?section=plaidoyer-rfh": {
    en: "/our-initiatives?section=rfh-advocacy",
    fr: "/nos-initiatives?section=plaidoyer-rfh",
  },

  "/our-initiatives": {
    en: "/our-initiatives",
    fr: "/nos-initiatives",
  },

  "/news-events?initiative=star-project": {
    en: "/news-events?initiative=star-project",
    fr: "/nouvelles?initiative=projet-star",
  },
  "/news-events?initiative=projet-star": {
    en: "/news-events?initiative=star-project",
    fr: "/nouvelles?initiative=projet-star",
  },
  "/news-events?initiative=repromatters": {
    en: "/news-events?initiative=repromatters",
    fr: "/nouvelles?initiative=questions-de-reproduction",
  },
  "/news-events?initiative=questions-de-reproduction": {
    en: "/news-events?initiative=repromatters",
    fr: "/nouvelles?initiative=questions-de-reproduction",
  },
  "/news-events?initiative=free-tribe-boost-camp": {
    en: "/news-events?initiative=free-tribe-boost-camp",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe",
  },
  "/news-events?initiative=boost-camp-de-free-tribe": {
    en: "/news-events?initiative=free-tribe-boost-camp",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe",
  },
  "/news-events?initiative=free-tribe-helpline": {
    en: "/news-events?initiative=free-tribe-helpline",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe": {
    en: "/news-events?initiative=free-tribe-helpline",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe",
  },
  "/news-events?initiative=free-tribe-clubs": {
    en: "/news-events?initiative=free-tribe-clubs",
    fr: "/nouvelles?initiative=clubs-de-free-tribe",
  },
  "/news-events?initiative=clubs-de-free-tribe": {
    en: "/news-events?initiative=free-tribe-clubs",
    fr: "/nouvelles?initiative=clubs-de-free-tribe",
  },
  "/news-events?initiative=rfh-advocacy": {
    en: "/news-events?initiative=rfh-advocacy",
    fr: "/nouvelles?initiative=plaidoyer-rfh",
  },
  "/news-events?initiative=plaidoyer-rfh": {
    en: "/news-events?initiative=rfh-advocacy",
    fr: "/nouvelles?initiative=plaidoyer-rfh",
  },
  "/news-events?section=recent-activities": {
    en: "/news-events?section=recent-activities",
    fr: "/nouvelles?section=activites-recentes",
  },
  "/news-events?section=activites-recentes": {
    en: "/news-events?section=recent-activities",
    fr: "/nouvelles?section=activites-recentes",
  },
  "/news-events?section=upcoming-activities": {
    en: "/news-events?section=upcoming-activities",
    fr: "/nouvelles?section=activites-a-venir",
  },
  "/news-events?section=activites-a-venir": {
    en: "/news-events?section=upcoming-activities",
    fr: "/nouvelles?section=activites-a-venir",
  },
  "/news-events?section=blog-posts": {
    en: "/news-events?section=blog-posts",
    fr: "/nouvelles?section=articles-de-blog",
  },
  "/news-events?section=articles-de-blog": {
    en: "/news-events?section=blog-posts",
    fr: "/nouvelles?section=articles-de-blog",
  },

  "/news-events?section=blog-posts&initiative=star-project": {
    en: "/news-events?section=blog-posts&initiative=star-project",
    fr: "/nouvelles?section=articles-de-blog&initiative=projet-star",
  },
  "/news-events?section=articles-de-blog&initiative=projet-star": {
    en: "/news-events?section=blog-posts&initiative=star-project",
    fr: "/nouvelles?section=articles-de-blog&initiative=projet-star",
  },
  "/news-events?initiative=star-project&section=blog-posts": {
    en: "/news-events?initiative=star-project&section=blog-posts",
    fr: "/nouvelles?initiative=projet-star&section=articles-de-blog",
  },
  "/news-events?initiative=projet-star&section=articles-de-blog": {
    en: "/news-events?initiative=star-project&section=blog-posts",
    fr: "/nouvelles?initiative=projet-star&section=articles-de-blog",
  },

  "/news-events?section=blog-posts&initiative=repromatters": {
    en: "/news-events?section=blog-posts&initiative=repromatters",
    fr: "/nouvelles?section=articles-de-blog&initiative=questions-de-reproduction",
  },
  "/news-events?section=articles-de-blog&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=blog-posts&initiative=repromatters",
      fr: "/nouvelles?section=articles-de-blog&initiative=questions-de-reproduction",
    },
  "/news-events?initiative=repromatters&section=blog-posts": {
    en: "/news-events?initiative=repromatters&section=blog-posts",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=articles-de-blog",
  },
  "/news-events?initiative=questions-de-reproduction&section=articles-de-blog":
    {
      en: "/news-events?initiative=repromatters&section=blog-posts",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=articles-de-blog",
    },

  "/news-events?section=blog-posts&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=articles-de-blog&initiative=boost-camp-de-free-tribe",
  },
  "/news-events?section=articles-de-blog&initiative=boost-camp-de-free-tribe": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=articles-de-blog&initiative=boost-camp-de-free-tribe",
  },
  "/news-events?initiative=free-tribe-boost-camp&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=blog-posts",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=articles-de-blog",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=articles-de-blog": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=blog-posts",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=articles-de-blog",
  },

  "/news-events?section=blog-posts&initiative=free-tribe-helpline": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe",
  },
  "/news-events?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=blog-posts&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=articles-de-blog&initiative=ligne-dassistance-la-free-tribe",
    },
  "/news-events?initiative=free-tribe-helpline&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-helpline&section=blog-posts",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=blog-posts",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=articles-de-blog",
    },

  "/news-events?section=blog-posts&initiative=free-tribe-clubs": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=articles-de-blog&initiative=clubs-de-free-tribe",
  },
  "/news-events?section=articles-de-blog&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=blog-posts&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=articles-de-blog&initiative=clubs-de-free-tribe",
  },
  "/news-events?initiative=free-tribe-clubs&section=blog-posts": {
    en: "/news-events?initiative=free-tribe-clubs&section=blog-posts",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=articles-de-blog",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=articles-de-blog": {
    en: "/news-events?initiative=free-tribe-clubs&section=blog-posts",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=articles-de-blog",
  },

  "/news-events?section=blog-posts&initiative=rfh-advocacy": {
    en: "/news-events?section=blog-posts&initiative=rfh-advocacy",
    fr: "/nouvelles?section=articles-de-blog&initiative=plaidoyer-rfh",
  },
  "/news-events?section=articles-de-blog&initiative=plaidoyer-rfh": {
    en: "/news-events?section=blog-posts&initiative=rfh-advocacy",
    fr: "/nouvelles?section=articles-de-blog&initiative=plaidoyer-rfh",
  },
  "/news-events?initiative=rfh-advocacy&section=blog-posts": {
    en: "/news-events?initiative=rfh-advocacy&section=blog-posts",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=articles-de-blog",
  },
  "/news-events?initiative=plaidoyer-rfh&section=articles-de-blog": {
    en: "/news-events?initiative=rfh-advocacy&section=blog-posts",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=articles-de-blog",
  },

  "/news-events?section=upcoming-activities&initiative=star-project": {
    en: "/news-events?section=upcoming-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-a-venir&initiative=projet-star",
  },
  "/news-events?section=activites-a-venir&initiative=projet-star": {
    en: "/news-events?section=upcoming-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-a-venir&initiative=projet-star",
  },
  "/news-events?initiative=star-project&section=upcoming-activities": {
    en: "/news-events?initiative=star-project&section=upcoming-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-a-venir",
  },
  "/news-events?initiative=projet-star&section=activites-a-venir": {
    en: "/news-events?initiative=star-project&section=upcoming-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-a-venir",
  },

  "/news-events?section=upcoming-activities&initiative=repromatters": {
    en: "/news-events?section=upcoming-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-a-venir&initiative=questions-de-reproduction",
  },
  "/news-events?section=activites-a-venir&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=upcoming-activities&initiative=repromatters",
      fr: "/nouvelles?section=activites-a-venir&initiative=questions-de-reproduction",
    },
  "/news-events?initiative=repromatters&section=upcoming-activities": {
    en: "/news-events?initiative=repromatters&section=upcoming-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-a-venir",
  },
  "/news-events?initiative=questions-de-reproduction&section=activites-a-venir":
    {
      en: "/news-events?initiative=repromatters&section=upcoming-activities",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-a-venir",
    },

  "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=activites-a-venir&initiative=boost-camp-de-free-tribe",
  },
  "/news-events?section=activites-a-venir&initiative=boost-camp-de-free-tribe":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-a-venir&initiative=boost-camp-de-free-tribe",
    },
  "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-a-venir",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=activites-a-venir":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=upcoming-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-a-venir",
    },

  "/news-events?section=upcoming-activities&initiative=free-tribe-helpline": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe",
  },
  "/news-events?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=upcoming-activities&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=activites-a-venir&initiative=ligne-dassistance-la-free-tribe",
    },
  "/news-events?initiative=free-tribe-helpline&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-helpline&section=upcoming-activities",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=upcoming-activities",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-a-venir",
    },

  "/news-events?section=upcoming-activities&initiative=free-tribe-clubs": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-a-venir&initiative=clubs-de-free-tribe",
  },
  "/news-events?section=activites-a-venir&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=upcoming-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-a-venir&initiative=clubs-de-free-tribe",
  },
  "/news-events?initiative=free-tribe-clubs&section=upcoming-activities": {
    en: "/news-events?initiative=free-tribe-clubs&section=upcoming-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-a-venir",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=activites-a-venir": {
    en: "/news-events?initiative=free-tribe-clubs&section=upcoming-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-a-venir",
  },

  "/news-events?section=upcoming-activities&initiative=rfh-advocacy": {
    en: "/news-events?section=upcoming-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-a-venir&initiative=plaidoyer-rfh",
  },
  "/news-events?section=activites-a-venir&initiative=plaidoyer-rfh": {
    en: "/news-events?section=upcoming-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-a-venir&initiative=plaidoyer-rfh",
  },
  "/news-events?initiative=rfh-advocacy&section=upcoming-activities": {
    en: "/news-events?initiative=rfh-advocacy&section=upcoming-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-a-venir",
  },
  "/news-events?initiative=plaidoyer-rfh&section=activites-a-venir": {
    en: "/news-events?initiative=rfh-advocacy&section=upcoming-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-a-venir",
  },

  "/news-events?section=recent-activities&initiative=star-project": {
    en: "/news-events?section=recent-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-recentes&initiative=projet-star",
  },
  "/news-events?section=activites-recentes&initiative=projet-star": {
    en: "/news-events?section=recent-activities&initiative=star-project",
    fr: "/nouvelles?section=activites-recentes&initiative=projet-star",
  },
  "/news-events?initiative=star-project&section=recent-activities": {
    en: "/news-events?initiative=star-project&section=recent-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-recentes",
  },
  "/news-events?initiative=projet-star&section=activites-recentes": {
    en: "/news-events?initiative=star-project&section=recent-activities",
    fr: "/nouvelles?initiative=projet-star&section=activites-recentes",
  },

  "/news-events?section=recent-activities&initiative=repromatters": {
    en: "/news-events?section=recent-activities&initiative=repromatters",
    fr: "/nouvelles?section=activites-recentes&initiative=questions-de-reproduction",
  },
  "/news-events?section=activites-recentes&initiative=questions-de-reproduction":
    {
      en: "/news-events?section=recent-activities&initiative=repromatters",
      fr: "/nouvelles?section=activites-recentes&initiative=questions-de-reproduction",
    },
  "/news-events?initiative=repromatters&section=recent-activities": {
    en: "/news-events?initiative=repromatters&section=recent-activities",
    fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-recentes",
  },
  "/news-events?initiative=questions-de-reproduction&section=activites-recentes":
    {
      en: "/news-events?initiative=repromatters&section=recent-activities",
      fr: "/nouvelles?initiative=questions-de-reproduction&section=activites-recentes",
    },

  "/news-events?section=recent-activities&initiative=free-tribe-boost-camp": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-boost-camp",
    fr: "/nouvelles?section=activites-recentes&initiative=boost-camp-de-free-tribe",
  },
  "/news-events?section=activites-recentes&initiative=boost-camp-de-free-tribe":
    {
      en: "/news-events?section=recent-activities&initiative=free-tribe-boost-camp",
      fr: "/nouvelles?section=activites-recentes&initiative=boost-camp-de-free-tribe",
    },
  "/news-events?initiative=free-tribe-boost-camp&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-boost-camp&section=recent-activities",
    fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-recentes",
  },
  "/news-events?initiative=boost-camp-de-free-tribe&section=activites-recentes":
    {
      en: "/news-events?initiative=free-tribe-boost-camp&section=recent-activities",
      fr: "/nouvelles?initiative=boost-camp-de-free-tribe&section=activites-recentes",
    },

  "/news-events?section=recent-activities&initiative=free-tribe-helpline": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-helpline",
    fr: "/nouvelles?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe",
  },
  "/news-events?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe":
    {
      en: "/news-events?section=recent-activities&initiative=free-tribe-helpline",
      fr: "/nouvelles?section=activites-recentes&initiative=ligne-dassistance-la-free-tribe",
    },
  "/news-events?initiative=free-tribe-helpline&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-helpline&section=recent-activities",
    fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes",
  },
  "/news-events?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes":
    {
      en: "/news-events?initiative=free-tribe-helpline&section=recent-activities",
      fr: "/nouvelles?initiative=ligne-dassistance-la-free-tribe&section=activites-recentes",
    },

  "/news-events?section=recent-activities&initiative=free-tribe-clubs": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-recentes&initiative=clubs-de-free-tribe",
  },
  "/news-events?section=activites-recentes&initiative=clubs-de-free-tribe": {
    en: "/news-events?section=recent-activities&initiative=free-tribe-clubs",
    fr: "/nouvelles?section=activites-recentes&initiative=clubs-de-free-tribe",
  },
  "/news-events?initiative=free-tribe-clubs&section=recent-activities": {
    en: "/news-events?initiative=free-tribe-clubs&section=recent-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-recentes",
  },
  "/news-events?initiative=clubs-de-free-tribe&section=activites-recentes": {
    en: "/news-events?initiative=free-tribe-clubs&section=recent-activities",
    fr: "/nouvelles?initiative=clubs-de-free-tribe&section=activites-recentes",
  },

  "/news-events?section=recent-activities&initiative=rfh-advocacy": {
    en: "/news-events?section=recent-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-recentes&initiative=plaidoyer-rfh",
  },
  "/news-events?section=activites-recentes&initiative=plaidoyer-rfh": {
    en: "/news-events?section=recent-activities&initiative=rfh-advocacy",
    fr: "/nouvelles?section=activites-recentes&initiative=plaidoyer-rfh",
  },
  "/news-events?initiative=rfh-advocacy&section=recent-activities": {
    en: "/news-events?initiative=rfh-advocacy&section=recent-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-recentes",
  },
  "/news-events?initiative=plaidoyer-rfh&section=activites-recentes": {
    en: "/news-events?initiative=rfh-advocacy&section=recent-activities",
    fr: "/nouvelles?initiative=plaidoyer-rfh&section=activites-recentes",
  },

  "/news-events": {
    en: "/news-events",
    fr: "/nouvelles",
  },
  "/resources": {
    en: "/resources",
    fr: "/ressources",
  },
  "/donate": {
    en: "/donate",
    fr: "/faire-un-don",
  },
  "/activity": {
    en: "/activity",
    fr: "/activite",
  },

  "/activity/[slug]?section=recent-activities": {
    en: "/activity/[slug]?section=recent-activities",
    fr: "/activite/[slug]?section=activites-recentes",
  },
  "/activity/[slug]?section=activites-recentes": {
    en: "/activity/[slug]?section=recent-activities",
    fr: "/activite/[slug]?section=activites-recentes",
  },
  "/activity/[slug]?section=upcoming-activities": {
    en: "/activity/[slug]?section=upcoming-activities",
    fr: "/activite/[slug]?section=activites-a-venir",
  },
  "/activity/[slug]?section=activites-a-venir": {
    en: "/activity/[slug]?section=upcoming-activities",
    fr: "/activite/[slug]?section=activites-a-venir",
  },
  "/activity/[slug]": {
    en: "/activity/[slug]",
    fr: "/activite/[slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
