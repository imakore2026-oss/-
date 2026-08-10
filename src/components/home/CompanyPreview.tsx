import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";
import { ChevronRightIcon } from "@/components/ui/Icons";

const infoRows: [string, string][] = [
  ["会社名", siteConfig.companyName],
  ["代表者", siteConfig.ceo],
  ["設立", siteConfig.established],
  ["資本金", siteConfig.capital],
  ["所在地", siteConfig.address],
];

export default function CompanyPreview() {
  return (
    <section id="company" className="scroll-mt-24 bg-brand-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="COMPANY" title="会社案内" description={siteConfig.philosophy} />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PlaceholderPhoto label="本社・工場外観（写真プレースホルダー）" tone="dark" ratio="video" />
          </Reveal>

          <Reveal delayMs={100}>
            <dl className="divide-y divide-brand-100 overflow-hidden rounded-xl border border-brand-100 bg-white">
              {infoRows.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 text-sm font-bold text-brand-700">{label}</dt>
                  <dd className="text-sm text-slate-700">{value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/company"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-600"
            >
              会社案内をもっと見る
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
