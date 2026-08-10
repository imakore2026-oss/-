import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";
import { MailIcon, PhoneIcon, ClockIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "サービスに関するご相談・お見積りはこちらのフォームからお問い合わせください。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        breadcrumb="お問い合わせ"
        title="お問い合わせ"
        description="サービス内容やお見積りに関するご相談は、以下のフォームまたはお電話にて承っております。"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
              <h2 className="text-base font-bold text-brand-900">お電話でのお問い合わせ</h2>
              <a
                href={`tel:${siteConfig.tel.replace(/-/g, "")}`}
                className="mt-3 flex items-center gap-2 text-2xl font-bold text-brand-800"
              >
                <PhoneIcon className="h-6 w-6 text-brand-500" />
                {siteConfig.tel}
              </a>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600">
                <ClockIcon className="h-4 w-4" />
                {siteConfig.businessHours}
              </p>

              <hr className="my-6 border-brand-100" />

              <h2 className="text-base font-bold text-brand-900">メールでのお問い合わせ</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-700"
              >
                <MailIcon className="h-4 w-4 text-brand-500" />
                {siteConfig.email}
              </a>

              <hr className="my-6 border-brand-100" />
              <p className="text-xs leading-relaxed text-slate-500">
                {siteConfig.address}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
