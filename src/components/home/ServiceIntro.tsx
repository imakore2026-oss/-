import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderPhoto from "@/components/ui/PlaceholderPhoto";
import Reveal from "@/components/ui/Reveal";
import { strengths } from "@/data/site-config";

export default function ServiceIntro() {
  return (
    <section id="service-intro" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="SERVICE INTRODUCTION"
            title="サービス紹介"
            description="企画から加工・梱包・出荷まで、ワンストップで対応する総合加工商社として、お客様のものづくりを支えます。"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PlaceholderPhoto label="工場内での加工の様子（写真プレースホルダー）" tone="brand" ratio="video" />
          </Reveal>

          <div className="flex flex-col gap-6">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 120}>
                <div className="flex gap-4 rounded-xl border border-brand-100 bg-brand-50/40 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
