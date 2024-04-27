type Props = { isFetching: boolean; title: string };

export default function FetchingLoader({ isFetching, title }: Props) {
  if (!isFetching) return null;

  return (
    <article className="col-span-full text-center grid gap-3 p-8">
      <h5 className="animate-pulse">Fetching {title}...</h5>
    </article>
  );
}
