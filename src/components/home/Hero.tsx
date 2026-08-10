import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ChevronRightIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* 背景の装飾パターン（仮のメインビジュアル代替） */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500" />
        <svg
          className="absolute -bottom-1 left-0 h-40 w-full text-brand-800 opacity-60 sm:h-56"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L0,320Z"
          />
        </svg>
        <div className="absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <p className="animate-[fadeIn_0.8s_ease] text-sm font-semibold tracking-[0.25em] text-accent-400">
          {siteConfig.companyNameEn}
        </p>
        <h1 className="mt-5 max-w-2xl text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
          {siteConfig.catchCopy}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-100 sm:text-base">
          {siteConfig.subCopy}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-brand-900 shadow-lg transition-colors hover:bg-accent-400"
          >
            サービス一覧を見る
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
