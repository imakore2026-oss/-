"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/site-config";
import { LogoMark, MenuIcon, CloseIcon, PhoneIcon } from "@/components/ui/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移時はメニューを閉じる（レンダー中に state を調整する React 推奨パターン）
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // メニュー表示中は背面スクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="h-9 w-9 text-brand-600 lg:h-10 lg:w-10" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-brand-800 lg:text-base">
              {siteConfig.companyName}
            </span>
            <span className="text-[10px] tracking-wide text-brand-400 lg:text-xs">
              {siteConfig.companyNameEn}
            </span>
          </span>
        </Link>

        {/* PC ナビ */}
        <nav aria-label="グローバルナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-brand-800 transition-colors hover:text-brand-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.tel.replace(/-/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-brand-700"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.tel}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-brand-900 shadow-sm transition-colors hover:bg-accent-400"
          >
            お問い合わせ
          </Link>
        </div>

        {/* スマホ用ハンバーガーボタン */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-800 lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* スマホ用メニュー */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto border-t border-brand-100 bg-white shadow-lg transition-all duration-300 ease-out lg:hidden ${
          open
            ? "visible max-h-[calc(100vh-4rem)] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="モバイルナビゲーション" className="px-4 py-4">
          <ul className="flex flex-col divide-y divide-brand-50">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3.5 text-base font-medium text-brand-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${siteConfig.tel.replace(/-/g, "")}`}
            className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-brand-200 py-3 text-sm font-semibold text-brand-700"
          >
            <PhoneIcon className="h-4 w-4" />
            お電話：{siteConfig.tel}
          </a>
          <Link
            href="/contact"
            className="mt-3 mb-2 flex items-center justify-center rounded-lg bg-accent-500 py-3 text-sm font-bold text-brand-900"
          >
            お問い合わせフォーム
          </Link>
        </nav>
      </div>
    </header>
  );
}
