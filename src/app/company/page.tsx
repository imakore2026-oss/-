import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { companyHistory, siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "会社案内",
  description: "会社概要・沿革・アクセスなど、会社に関する情報をご紹介します。",
};

const infoRows: [string, string][] = [
  ["会社名", siteConfig.companyName],
  ["代表者", siteConfig.ceo],
  ["設立", siteConfig.established],
  ["資本金", siteConfig.capital],
  ["従業員数", siteConfig.employees],
  ["所在地", siteConfig.address],
  ["電話番号", siteConfig.tel],
  ["FAX番号", siteConfig.fax],
  ["営業時間", siteConfig.businessHours],
  ["事業内容", "フィルム・ラミネート加工、パウチ加工、梱包・出荷代行"],
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="COMPANY"
        breadcrumb="会社案内"
        title="会社案内"
        description={siteConfig.philosophy}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <PlaceholderPhoto label="本社・工場外観（写真プレースホルダー）" tone="dark" ratio="wide" />
        </Reveal>

        <Reveal delayMs={80} className="mt-12">
          <SectionHeading eyebrow="OUTLINE" title="会社概要" align="left" />
          <dl className="mt-6 divide-y divide-brand-100 overflow-hidden rounded-xl border border-brand-100">
            {infoRows.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 bg-white px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-28 shrink-0 text-sm font-bold text-brand-700">{label}</dt>
                <dd className="text-sm text-slate-700">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delayMs={80} className="mt-16">
          <SectionHeading eyebrow="HISTORY" title="沿革" align="left" />
          <ol className="mt-6 flex flex-col gap-5 border-l-2 border-brand-100 pl-6">
            {companyHistory.map((item) => (
              <li key={item.year} className="relative">
                <span
                  className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent-500"
                  aria-hidden="true"
                />
                <p className="text-sm font-bold text-brand-700">{item.year}</p>
                <p className="mt-1 text-sm text-slate-700">{item.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delayMs={80} id="access" className="mt-16 scroll-mt-24">
          <SectionHeading eyebrow="ACCESS" title="アクセス" align="left" />
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PlaceholderPhoto label={`地図（${siteConfig.mapEmbedQuery}周辺・プレースホルダー）`} tone="light" ratio="video" />
            <div className="flex flex-col justify-center gap-3 rounded-xl border border-brand-100 bg-white p-6">
              <p className="text-sm font-bold text-brand-800">{siteConfig.companyName}</p>
              <p className="text-sm text-slate-700">{siteConfig.address}</p>
              <p className="text-sm text-slate-700">TEL：{siteConfig.tel}</p>
              <p className="text-sm text-slate-700">{siteConfig.businessHours}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
