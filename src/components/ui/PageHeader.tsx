import Link from "next/link";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: string;
};

export default function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <nav aria-label="パンくずリスト" className="flex items-center gap-1.5 text-xs text-brand-200">
          <Link href="/" className="hover:text-white">
            トップ
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>
        <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-accent-400">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-100 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
