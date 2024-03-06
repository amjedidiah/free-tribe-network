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
