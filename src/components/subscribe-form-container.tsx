"use client";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "@/components/subscribe-form";
import { useTranslations } from "next-intl";

export default function SubscribeFormContainer() {
  const t = useTranslations("Layout.Subscribe");
  return (
    <div
      id="mailing-list"
      className="lg:w-[25rem] w-contain flex flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl lg:text-3xl text-slate-300">{t("title")}</h3>
        <p className="text-slate-300">
          {t.rich("description", {
            b: (chunks) => <b className="text-white">{chunks}</b>,
            a: (chunks) => (
              <a
                href="https://freetribenetwork.com/wp-content/uploads/2024/06/DATA-CONFIDENTIALITY-FOR-MAILING-LIST.pdf"
                className="text-white block underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
      <MailchimpSubscribe
        url={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL as string}
        render={(props) => <SubscribeForm {...props} />}
      />
    </div>
  );
}
