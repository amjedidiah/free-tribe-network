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

export enum ResourcesIds {
  AnnualReports = "dGVybTo3",
  Bulletins = "dGVybTo1",
  Researches = "dGVybTo2",
  SpecialPublications = "dGVybTo4",
  ProjectActivityReport = "dGVybToxMA==",
}

export type FetchCategoriesByIdVars = {
  id: ResourcesIds;
  hideDescription?: boolean;
  before?: string;
  after?: string;
  first?: number;
  last?: number;
  hasOverflow?: boolean;
};

export type FetchCategoriesByIdData = {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  startCursor: string;
  endCursor: string;
  resourceList: Resource[];
  title: string;
};

export interface IContentImage {
  id: string;
  mediaItemUrl: string;
  title: string;
}

type NewsFieldGroup = {
  dateTime: string;
  date: string;
  time: string;
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

export interface IActivity {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  isUpcoming: boolean;
  featuredImage: FeaturedImage;
  newsFieldGroup: NewsFieldGroup;
}