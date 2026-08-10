import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="36" height="36" rx="8" fill="currentColor" opacity="0.12" />
      <path
        d="M11 27V13l9 9 9-9v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="9 5 16 12 9 19" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 1-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  );
}

/* ---- サービスアイコン ---- */

export function ProcessIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
      <path d="M10.5 7h4a3 3 0 0 1 3 3v3.5M7 10.5v4a3 3 0 0 0 3 3h3.5" />
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" />
      <path d="M4 8l8 4.5L20 8M12 12.5V21" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7" width="12" height="9" rx="1" />
      <path d="M14.5 10h3.5L20.5 13v3h-6z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function QualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="10" r="6.5" />
      <path d="M9.3 10.2 11 12l3.7-4M9 21l3-3.5 3 3.5-1-5.5h-4Z" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a7 7 0 0 0-7 7v3.5A2.5 2.5 0 0 0 7.5 16H8v-6H5.5" />
      <path d="M19 13.5V10a7 7 0 0 0-7-7M18.5 16H16v-6h2.5A2.5 2.5 0 0 1 21 12.5v1A2.5 2.5 0 0 1 18.5 16Z" />
      <path d="M8 16v1.5A2.5 2.5 0 0 0 10.5 20H12" />
    </svg>
  );
}

export function EcoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c8-1 12-6 13-13-8 1-12 6-13 13Z" />
      <path d="M5 19c1.5-3 3.5-5.5 6-7.5" />
    </svg>
  );
}

export const serviceIconMap = {
  process: ProcessIcon,
  package: PackageIcon,
  truck: TruckIcon,
  quality: QualityIcon,
  support: SupportIcon,
  eco: EcoIcon,
};
