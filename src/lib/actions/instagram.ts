import { cache } from "react";
import { IGMedia, IGMediaIDObject, IGMediaType } from "@/lib/types";

const igFetchMediaIDs = cache(async () => {
  try {
    const mediaIDsResponse = await fetch(
      `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    );
    const mediaIDObjects: IGMediaIDObject[] = (await mediaIDsResponse.json())
      .data;
    if (!mediaIDObjects.length) return;

    return mediaIDObjects.map((item) => item.id);
  } catch (error) {
    console.error(error);
  }
});

const igFetchMediaWithMediaID = cache(async (mediaId: string) => {
  try {
    const mediaResponse = await fetch(
      `https://graph.instagram.com/${mediaId}?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&fields=media_url,permalink,media_type`
    );
    const media: IGMedia = await mediaResponse.json();

    return media;
  } catch (error) {
    console.error(error);
  }
});

export const igFetchImages = cache(async (count = 18) => {
  try {
    const mediaIDs = await igFetchMediaIDs();
    if (!mediaIDs) return;

    const media = await Promise.all(mediaIDs.map(igFetchMediaWithMediaID));
    return media
      .filter((item) => item?.media_type === IGMediaType.Image)
      .slice(0, count) as IGMedia[];
  } catch (error) {
    console.error(error);
  }
});
