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
        <h4>{t("title")}</h4>
        <p className="text-slate-300">
          {t.rich("description", {
             b: (chunks) => <b className="text-white">{chunks}</b>,
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
