import BlogList from "@/components/shared/blog-list";

export default function HomeNewsEvents() {
  return (
    <section className="py-10 lg:py-28">
      <article className="container grid gap-11">
        <div className="h2-gap">
          <h2 className="text-gray-900">News and Event</h2>
          <p className="text-description max-w-[35rem]">
            See what we&apos;ve been up to
          </p>
        </div>
        <BlogList />
      </article>
    </section>
  );
}
