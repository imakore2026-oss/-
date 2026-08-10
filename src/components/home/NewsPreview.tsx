import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { newsItems } from "@/data/site-config";
import { formatDate } from "@/lib/format";
import { ChevronRightIcon } from "@/components/ui/Icons";

export default function NewsPreview() {
  const latest = newsItems.slice(0, 4);

  return (
    <section id="news" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="NEWS" title="ニュース" description="最新のお知らせをご覧いただけます。" />
        </Reveal>

        <ul className="mt-12 divide-y divide-brand-100 border-y border-brand-100">
          {latest.map((news, i) => (
            <Reveal as="li" key={news.slug} delayMs={i * 80}>
              <Link
                href={`/news/${news.slug}`}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-6"
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

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-500"
          >
            ニュース一覧をすべて見る
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
