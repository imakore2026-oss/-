import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";

export default function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-brand-900 py-16 sm:py-20">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">お見積り・ご相談はお気軽に</h2>
        <p className="max-w-xl text-sm leading-relaxed text-brand-200 sm:text-base">
          「何から始めればいいかわからない」というご相談も歓迎です。担当者が丁寧にヒアリングいたします。
        </p>

        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a
            href={`tel:${siteConfig.tel.replace(/-/g, "")}`}
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <PhoneIcon className="h-5 w-5 text-accent-400" />
            {siteConfig.tel}
          </a>
          <span className="hidden text-brand-400 sm:inline">|</span>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-brand-100">
            <MailIcon className="h-4 w-4 text-accent-400" />
            {siteConfig.email}
          </a>
        </div>

        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-accent-500 px-9 py-4 text-sm font-bold text-brand-900 shadow-lg transition-colors hover:bg-accent-400"
        >
          お問い合わせフォームへ
        </Link>
      </Reveal>
    </section>
  );
}
