type PlaceholderPhotoProps = {
  label: string;
  tone?: "brand" | "light" | "dark";
  className?: string;
  ratio?: "video" | "square" | "portrait" | "wide";
};

const toneClasses: Record<NonNullable<PlaceholderPhotoProps["tone"]>, string> = {
  brand: "from-brand-700 via-brand-500 to-brand-300 text-white",
  light: "from-brand-100 via-brand-50 to-white text-brand-700",
  dark: "from-brand-900 via-brand-700 to-brand-500 text-white",
};

const ratioClasses: Record<NonNullable<PlaceholderPhotoProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * 実写真の代わりに使用するプレースホルダー。
 * 実運用時は同じ場所に next/image で実際の写真を差し替えてください。
 */
export default function PlaceholderPhoto({
  label,
  tone = "brand",
  className = "",
  ratio = "video",
}: PlaceholderPhotoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${toneClasses[tone]} ${ratioClasses[ratio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 140 L50 90 L90 130 L140 60 L200 120 L200 200 L0 200 Z" fill="currentColor" />
        <circle cx="165" cy="40" r="22" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="relative px-4 text-center text-sm font-medium tracking-wide opacity-90">
        {label}
      </span>
    </div>
  );
}
