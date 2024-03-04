import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CurrencyKeys, currencies, initiativeData } from "@/lib/data";
import { PostData } from "@/hooks/use-medium";
import truncateHtml from "truncate-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLinkLabel = (href: string | null) =>
  !href ? "" : href.replace(/-/g, " ");

export const fetchInitiativeData = async (name: string) =>
  Promise.resolve(initiativeData[name as keyof typeof initiativeData]);

const contentWithoutImage = (text: string) => {
  let parser = new DOMParser();

  // Parse the text as HTML and get the document element
  let doc = parser.parseFromString(text, "text/html");
  let html = doc.documentElement;

  // Get all the img elements in the document and loop through them
  let images = html.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    // Remove each img element from its parent node
    let image = images[i];
    image.parentNode?.removeChild(image);
  }

  // Serialize the modified document back to text
  let newText = new XMLSerializer().serializeToString(doc);

  return newText;
};

const extractContentImage = (text: string) => {
  // Assuming you have a variable called text that holds the html content
  // Parse the text as HTML and create a DOM parser
  let parser = new DOMParser();
  let doc = parser.parseFromString(text, "text/html");

  // Get the first img element in the document and get its src attribute
  let image = doc.getElementsByTagName("img")[0];
  let src = image.getAttribute("src");

  // Do something with the src value, such as displaying it or sending it to the server
  return src; // for example, log it to the console
};

export const formatPostsData = (postsData?: PostData[]) => {
  if (!postsData) return [];
  return postsData.map(({ category, title, content, published, link }) => ({
    image:
      extractContentImage(content) || "/images/banners/who-we-are-banner.jpeg",
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
};

export const validateEmailWithRegex = (email: string) =>
  Boolean(
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

export const amountToCents = (amount: number) => amount * 100;

export const formatAmount = (amount: number) =>
  amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const getDonationCurrency = (currencyLabel: CurrencyKeys) =>
  currencies[currencyLabel];

export const validateDonationAmount = (
  amount: number | string,
  currencyLabel: CurrencyKeys
) => Number(amount) >= (getDonationCurrency(currencyLabel)?.min || 0);