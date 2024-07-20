import { IGMedia } from "@/lib/types";
import IgFeedImage from "@/components/home/ig-feed-image";

export default function IGFeedList({ list }: { list: IGMedia[] }) {
  return (
    <div
      id="ig-feed"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-3 gap-1"
    >
      {list.map((item, i) => (
        <IgFeedImage key={`ig-image-${i}`} index={i} {...item} />
      ))}
    </div>
  );
}
