"use client";
import ContactCard from "@/components/layout/contact-card";
import SubscribeFormContainer from "@/components/subscribe-form-container";
import { Link, usePathname } from "@/lib/i18n.config";
import { contactChannels, currentYear, routes } from "@/lib/data";
import Socials from "@/components/shared/socials";
import ContentImageClient from "@/components/shared/content-image-client";
import { useTranslations } from "next-intl";
import ShouldRender from "@/components/shared/should-render";

export default function Footer({ minimal = false }) {
  const pathname = usePathname();
  const t = useTranslations("Layout");
  minimal = pathname === "/resources";

  return (
    <footer>
      <ShouldRender condition={!minimal}>
        <section className="container" id={t("Contact.id")}>
          <article className="py-12 lg:py-24 h3-gap">
            <h3 className=" text-black">{t("Heading.title")}</h3>
            <p>{t("Heading.description")}</p>
          </article>

          <article className="pb-12 lg:pb-24 grid lg:grid-cols-2 gap-6">
            {contactChannels.map((i) => (
              <ContactCard key={i.title} {...i} />
            ))}
          </article>
        </section>
      </ShouldRender>
      <section className="bg-secondary-900 py-10">
        <div className="container grid gap-6 lg:gap-8 text-white">
          <ShouldRender condition={!minimal}>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex flex-col gap-6">
                <Link href="/" aria-label="homepage">
                  <div className="relative h-[60px] w-[60px]">
                    <ContentImageClient
                      title="free-tribe-white"
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </Link>
                <div className="grid gap-6">
                  <ul className="flex flex-col lg:flex-row gap-4">
                    {routes.map(({ links, ...item }) => (
                      <li key={item.label}>
                        <Link href={item.href as any}>
                          {t(`Contact.${item.label}` as any)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Socials className="[&_*]:text-white" />
                </div>
              </div>

              <SubscribeFormContainer />
            </div>
            <hr />
          </ShouldRender>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
            <div className="flex max-sm:flex-col items-center gap-2 capitalize">
              <a href="https://freetribenetwork.com/content/wp-content/uploads/2024/06/TERMS-AND-CONDITIONS.pdf">
                {t("Footer.Terms")}
              </a>{" "}
              <span className="max-sm:hidden">|</span>
              <a href="https://freetribenetwork.com/content/wp-content/uploads/2024/06/PRIVACY-POLICY.pdf">
                {t("Footer.Privacy")}
              </a>{" "}
              <span className="max-sm:hidden">|</span>
              <a href="https://freetribenetwork.com/content/wp-content/uploads/2024/06/COOKIE-POLICY.pdf">
                {t("Footer.Cookie")}
              </a>
            </div>
            <p className="text-slate-300">
              <span>
                &copy; {currentYear} {t("Footer.Copyright")}
              </span>
              . <span>{t("Footer.Rights")}</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
