import ContactCard from "@/components/layout/contact-card";
import SubscribeFormContainer from "@/components/subscribe-form-container";
import { Link } from "@/lib/i18n.config";
import { contactChannels, currentYear, routes } from "@/lib/data";
import Socials from "@/components/shared/socials";
import ContentImage from "@/components/shared/content-image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Layout");

  return (
    <footer>
      <section className="container" id="contact-us">
        <article className="py-12 lg:py-24 h3-gap">
          <h3 className=" text-black">{t('Heading.title')}</h3>
          <p>{t('Heading.description')}</p>
        </article>

        <article className="pb-12 lg:pb-24 grid lg:grid-cols-3 gap-6">
          {contactChannels.map((i) => (
            <ContactCard key={i.title} {...i} />
          ))}
        </article>
      </section>
      <section className="bg-secondary-900 py-10">
        <div className="container grid gap-6 lg:gap-8 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col gap-6">
              <Link href="/">
                <div className="relative h-[60px] w-[60px]">
                  <ContentImage
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
                      <Link href={item.href}>{t(`Contact.${item.label}` as any)}</Link>
                    </li>
                  ))}
                </ul>
                <Socials className="[&_*]:text-white" />
              </div>
            </div>

            <SubscribeFormContainer />
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
            <p>&copy; {currentYear} {t("Footer.Copyright")}</p>
            <p>{t("Footer.Rights")}</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
