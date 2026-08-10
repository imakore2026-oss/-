import Link from "next/link";
import { footerNavGroups, siteConfig } from "@/data/site-config";
import { LogoMark, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import BackToTop from "@/components/layout/BackToTop";

export default function Footer() {
  return (
    <footer className="relative bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9 text-accent-400" />
              <span className="text-base font-bold text-white">{siteConfig.companyName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {siteConfig.subCopy}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-brand-200">
              <li className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent-400" />
                {siteConfig.tel}
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-accent-400" />
                {siteConfig.email}
              </li>
            </ul>
          </div>

          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-200 transition-colors hover:text-accent-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-700 pt-6 sm:flex-row">
          <p className="text-xs text-brand-300">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}
            <span className="ml-2 text-brand-400">
              （本サイトはデモ用のサンプルコーポレートサイトです）
            </span>
          </p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
