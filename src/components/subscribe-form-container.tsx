"use client";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "@/components/subscribe-form";

export default function SubscribeFormContainer() {
  return (
    <div
      id="mailing-list"
      className="lg:w-[25rem] w-contain flex flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-1">
        <h4>Subscribe to our mail</h4>
        <p className="text-slate-300">
          By registering, you permit the{" "}
          <span className="font-bold">Free Tribe Network</span> to store and
          collect your email address for the purpose of sending you our monthly
          newsletter.
        </p>
      </div>
      <MailchimpSubscribe
        url={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL as string}
        render={(props) => <SubscribeForm {...props} />}
      />
    </div>
  );
}
