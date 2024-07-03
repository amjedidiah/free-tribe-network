import { useTranslations } from "next-intl";

type Props = {
  name: "NotFound" | "Error";
  action(): void;
};

export default function ErrorLayout({ name, action }: Props) {
  const t = useTranslations(name);

  return (
    <section className="mt-36 py-10 lg:py-14">
      <article className="container text-center">
        <h1 className="font-extralight text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem]">
          {t("title")}
        </h1>
        <div className="relative flex flex-col gap-2 items-center">
          <p>{t("text")}</p>
          <button
            onClick={action}
            className="bg-primary-500 text-white px-5 py-3 rounded shadow-md"
          >
            {t("action")}
          </button>
        </div>
      </article>
    </section>
  );
}
