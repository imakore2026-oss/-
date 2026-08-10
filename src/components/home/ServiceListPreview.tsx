import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/site-config";
import { serviceIconMap, ChevronRightIcon } from "@/components/ui/Icons";

export default function ServiceListPreview() {
  return (
    <section id="services" className="scroll-mt-24 bg-brand-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="SERVICE LIST"
            title="サービス一覧"
            description="加工・梱包・品質管理まで、幅広いニーズにお応えする6つのサービスをご用意しています。"
          />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Reveal as="li" key={service.slug} delayMs={(i % 3) * 100}>
                <Link
                  href={`/service#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white transition-colors group-hover:bg-accent-500 group-hover:text-brand-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-brand-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-accent-600">
                    詳しく見る
                    <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/service"
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-300 px-7 py-3.5 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-600 hover:text-white"
          >
            サービス一覧をすべて見る
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
