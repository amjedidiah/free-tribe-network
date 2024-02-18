import BlogList from "@/components/shared/blog-list";

export default function HomeNewsEvents() {
  return (
    <section className="py-10 lg:py-28">
      <article className="container grid gap-11">
        <div className="flex flex-col gap-6">
          <h2 className="text-gray-900 text-3xl lg:text-5xl font-semibold">
            News and Event
          </h2>
          <p className="text-description max-w-[35rem]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <BlogList />
      </article>
    </section>
  );
}
