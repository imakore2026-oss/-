import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/site-config";
import { serviceIconMap, ChevronRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "サービス一覧",
  description: "加工・梱包・品質管理まで、幅広いニーズにお応えするサービス一覧です。",
};

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICE LIST"
        breadcrumb="サービス一覧"
        title="サービス一覧"
        description="企画から加工・梱包・出荷まで、ワンストップで対応する6つのサービスをご紹介します。"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Reveal key={service.slug} delayMs={(i % 3) * 80}>
                <div
                  id={service.slug}
                  className="scroll-mt-24 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-brand-900 sm:text-xl">{service.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 rounded-lg bg-brand-50/60 px-3.5 py-2.5 text-sm text-brand-800"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-brand-50/60 p-10 text-center">
          <p className="text-sm text-slate-700 sm:text-base">
            ご相談・お見積りは無料です。まずはお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-900 shadow-sm transition-colors hover:bg-accent-400"
          >
            お問い合わせフォームへ
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
