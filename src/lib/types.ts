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