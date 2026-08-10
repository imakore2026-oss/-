import type { NewsCategory } from "@/data/site-config";

const styles: Record<NewsCategory, string> = {
  お知らせ: "bg-brand-100 text-brand-700",
  製品情報: "bg-amber-100 text-amber-700",
  採用: "bg-emerald-100 text-emerald-700",
  メディア: "bg-purple-100 text-purple-700",
};

export default function CategoryBadge({ category }: { category: NewsCategory }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-bold ${
        styles[category] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {category}
    </span>
  );
}
