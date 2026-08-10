"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "li";
  id?: string;
};

/**
 * 画面内に入ったタイミングでフェードイン+スライドインさせる汎用ラッパー。
 * IntersectionObserver を使用し、一度表示された要素は表示状態を維持する。
 */
export default function Reveal({
  children,
  delayMs = 0,
  className = "",
  as = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;
  const classes = `reveal ${visible ? "reveal-visible" : ""} ${className}`;

  if (as === "li") {
    return (
      <li id={id} ref={ref as React.RefObject<HTMLLIElement>} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div id={id} ref={ref as React.RefObject<HTMLDivElement>} className={classes} style={style}>
      {children}
    </div>
  );
}
