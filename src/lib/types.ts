import { CurrencyKeys } from "@/lib/data";
import enMessages from "@/locales/en.json";
import { HTMLAttributes } from "react";

type Messages = typeof enMessages;
declare global {
  interface IntlMessages extends Messages {}
}

export type PostData = {
  link: string;
  author: string;
  created: number;
  enclosures: string[];
  content_encoded: string;
  media: any;

  category: string[];
  title: string;
  content: string;
  description: string;
  published: number;
};

export type Post = {
  image: string;
  initiatives: string[];
  title: string;
  desc: string;
  date: string;
  link: string;
};

export type Resource = {
  id: string;
  cursor: string;
  title: string;
  description?: string | TrustedHTML;
  modifiedDate: string;
  src: string;
  url: string;
  minsRead: number;
};

export type ResourcesIds = ResourcesIdsEN | ResourcesIdsFR | ResourcesIdsNL;

export enum ResourcesIdsEN {
  AnnualReports = "dGVybTo3",
  Bulletins = "dGVybTo1",
  Researches = "dGVybTo2",
  SpecialPublications = "dGVybTo4",
  ProjectActivityReport = "dGVybToxMA==",
}

export enum ResourcesIdsFR {
  AnnualReports = "dGVybToxMTA=",
  Bulletins = "dGVybToxMDE=",
  Researches = "dGVybToxMDY=",
  SpecialPublications = "dGVybToxMTY=",
  ProjectActivityReport = "dGVybTo5Mg==",
}

export enum ResourcesIdsNL {
  AnnualReports = "dGVybToxMTI=",
  Bulletins = "dGVybToxMDM=",
  Researches = "dGVybToxMDg=",
  SpecialPublications = "dGVybToxMTQ=",
  ProjectActivityReport = "dGVybTo5NA==",
}

export type ResourcesListProps = {
  isSecondary?: boolean;
  hasBorder?: boolean;
  resourceId: ResourcesIds;

  hasOverflow?: boolean;
  hideDescription?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type ResourceListMainProps = Pick<
  ResourcesListProps,
  "hasOverflow" | "isSecondary" | "hasBorder"
>;

export type FetchCategoriesByIdVars = {
  id: ResourcesIds;
  before?: string;
  after?: string;
  first?: number;
  last?: number;
} & Pick<ResourcesListProps, "hasOverflow" | "hideDescription">;

export type PageInfo = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
};

export type FetchCategoriesByIdData = PageInfo & {
  resourceList: Resource[];
  title: string;
};

export interface IContentImage {
  id: string;
  mediaItemUrl: string;
  title: string;
  mediaDetails: {
    height: number;
    width: number;
  };
}

type NewsFieldGroup = {
  dateTime: string;
  date: string;
  time: string;
  sharedid: string;
  schedule?: string;
  scheduleNotes?: string;
  venue: string;
  venueNotes?: string;
};

type FeaturedImage = {
  node: {
    mediaItemUrl: string;
  } | null;
};

type Category = {
  name: string;
  id: string;
  slug: string;
  parent?: {
    node: {
      slug: string;
    };
  };
};

export interface IActivity {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  description: string | TrustedHTML;
  slug: string;
  isUpcoming: boolean;
  cursor?: string;
  categories: Category[];
  featuredImage: FeaturedImage;
  newsFieldGroup: NewsFieldGroup;
}

export type CategoryName = "recent-activities" | "upcoming-activities";

export type fetchActivitiesByCategoryNameVars = {
  categoryName: CategoryName;
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

export type fetchActivitiesByCategoryNameData = PageInfo & {
  activityList: IActivity[];
};

export type FlwPaymentPlan = {
  id: number;
  name: string;
  amount: number;
  interval: string;
  duration: number;
  status: string;
  currency: CurrencyKeys;
  plan_token: string;
  created_at: string;
};

export enum LocaleCountry {
  GB = "GB",
  FR = "FR",
  NL = "NL",
}

export enum Locale {
  en = "en",
  fr = "fr",
  nl = "nl",
}

export type PropsWithLocaleParam = {
  params: {
    locale: Locale;
  };
};

export enum CookieType {
  // essential cookies
  Consent = "consent",
  Translation = "translation",

  // non-essential cookies
  Search = "search",
}

export type CookiesConsentContextType = {
  shouldShowConsent: boolean;
  shouldShowSearch: boolean;

  acceptAllCookies: () => void;
  acceptEssentialCookies: () => void;
};

export enum ClientContentImageTitle {
  Repromatters1 = "repromatters-1",

  FreeTribeBoostCamp1 = "free-tribe-boost-camp-1",
  FreeTribeBoostCamp2 = "free-tribe-boost-camp-2",
  FreeTribeBoostCamp3 = "free-tribe-boost-camp-3",

  FreeTribeHelpline1 = "free-tribe-helpline-1",

  FreeTribeClubs1 = "free-tribe-clubs-1",

  Star1 = "star-1",
  Star2 = "star-2",
  Star3 = "star-3",

  RFHAdvocacy1 = "rfh-advocacy-1",
  RFHAdvocacy2 = "rfh-advocacy-2",
  RFHAdvocacy3 = "rfh-advocacy-3",

  HomeBannerSlide1 = "home-banner-slide-1",
  HomeBannerSlide2 = "home-banner-slide-2",
  HomeBannerSlide3 = "home-banner-slide-3",
  HomeBannerSlide4 = "home-banner-slide-4",
  HomeBannerSlide5 = "home-banner-slide-5",

  Bot1 = "bot-1",
  Bot2 = "bot-2",
  Bot3 = "bot-3",
  Bot4 = "bot-4",
  Bot5 = "bot-5",
  Bot6 = "bot-6",
  Bot7 = "bot-7",
  Bot8 = "bot-8",
  Bot9 = "bot-9",

  FooterLogo = "footer-logo",
  HeaderLogo = "header-logo",
}

export type ClientContentImages = Record<
  ClientContentImageTitle,
  IContentImage
>;

export type IGMediaIDObject = {
  id: string;
};

export enum IGMediaType {
  Image = "IMAGE",
  Video = "VIDEO",
  Album = "CAROUSEL_ALBUM",
}

export type IGMedia = {
  media_url: string;
  permalink: string;
  id: string;
  media_type: IGMediaType;
};