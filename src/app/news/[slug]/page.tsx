import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import CategoryBadge from "@/components/ui/CategoryBadge";
import { newsItems } from "@/data/site-config";
import { formatDate } from "@/lib/format";
import { ChevronRightIcon } from "@/components/ui/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return newsItems.map((news) => ({ slug: news.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = newsItems.find((n) => n.slug === slug);
  return { title: news ? news.title : "ニュース" };
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const news = newsItems.find((n) => n.slug === slug);
  if (!news) notFound();

  return (
    <>
      <PageHeader eyebrow="NEWS" breadcrumb={news.title} title="ニュース詳細" />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex items-center gap-3">
          <time dateTime={news.date} className="text-sm text-slate-500">
            {formatDate(news.date)}
          </time>
          <CategoryBadge category={news.category} />
        </div>
        <h1 className="mt-4 text-xl font-bold text-brand-900 sm:text-2xl">{news.title}</h1>
        <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-slate-700 sm:text-base">
          {news.body}
        </p>

        <Link
          href="/news"
          className="mt-12 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-500"
        >
          <ChevronRightIcon className="h-4 w-4 rotate-180" />
          ニュース一覧へ戻る
        </Link>
      </article>
    </>
  );
}
