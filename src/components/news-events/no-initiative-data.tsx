import { Button } from "@/components/ui/button";
import { formatLinkLabel } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  shouldShowRefreshButton?: boolean;
};

export default function NoInitiativeData({
  shouldShowRefreshButton = true,
}: Props) {
  const searchParams = useSearchParams();
  const urlSection = searchParams.get("section");
  const title = formatLinkLabel(urlSection);

  return (
    <article className="col-span-full text-center grid gap-3 p-8">
      {title && (
        <h5>
          No <span className="font-medium">{title}</span> for this selection yet
        </h5>
      )}
      {shouldShowRefreshButton && (
        <Link href="/news-events">
          <Button variant="outline">Refresh</Button>
        </Link>
      )}
    </article>
  );
}
