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

type PageInfo = {
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