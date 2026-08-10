type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-accent-600">
        <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold text-brand-900 sm:text-3xl">{title}</h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed text-slate-600 sm:text-base ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
