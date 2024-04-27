"use server";

import { JSDOM } from "jsdom";

import truncateHtml from "truncate-html";
import { cache } from "react";
import { Post, PostData } from "../types";
import parse from "rss-to-json";

const contentWithoutImage = (text: string) => {
  // Parse the text as HTML using jsdom
  const dom = new JSDOM(text);
  const document = dom.window.document;

  // Get all the img elements in the document and loop through them
  const images = document.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    // Remove each img element from its parent node
    images[i].parentNode?.removeChild(images[i]);
  }

  // Serialize the modified document back to text
  const newText = dom.serialize();

  return newText;
};

const extractContentImage = (text: string) => {
  // Parse the text as HTML using jsdom
  const dom = new JSDOM(text);
  const document = dom.window.document;

  // Get the first img element in the document and get its src attribute
  const image = document.querySelector("img");
  const src = image ? image.getAttribute("src") : null;

  // Do something with the src value, such as displaying it or sending it to the server
  return src; // for example, return it
};

const formatPostsData = (postsData: PostData[]): Post[] =>
  postsData.map(({ category, title, content, published, link }) => ({
    image:
      extractContentImage(content) || "/images/banners/who-we-are-banner.webp",
    initiatives: category,
    title,
    link,
    desc: truncateHtml(contentWithoutImage(content), 50, { byWords: true }),
    date: new Date(published).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

export const fetchMediumPosts = cache(async () => {
  try {
    const { items } = await parse("https://medium.com/feed/@freetribenetwork");

    const posts = formatPostsData(items);
    const topPosts = posts.slice(0, 3);

    return { posts, topPosts };
  } catch (error) {
    console.error(error);
    return { posts: [], topPosts: [] };
  }
});
