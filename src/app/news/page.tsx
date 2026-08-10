import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { newsItems } from "@/data/site-config";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "ニュース",
  description: "お知らせ・製品情報・採用情報などの最新ニュース一覧です。",
};

export default function NewsListPage() {
  return (
    <>
      <PageHeader eyebrow="NEWS" breadcrumb="ニュース" title="ニュース" description="最新のお知らせを掲載しています。" />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ul className="divide-y divide-brand-100 border-y border-brand-100">
          {newsItems.map((news, i) => (
            <Reveal as="li" key={news.slug} delayMs={(i % 5) * 60}>
              <Link
                href={`/news/${news.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-44 sm:shrink-0">
                  <time dateTime={news.date} className="text-sm text-slate-500">
                    {formatDate(news.date)}
                  </time>
                  <CategoryBadge category={news.category} />
                </div>
                <p className="text-sm font-medium text-brand-900 transition-colors group-hover:text-brand-600 sm:text-base">
                  {news.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
