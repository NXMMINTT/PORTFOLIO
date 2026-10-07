import type { ReactNode } from "react";

const handles = [
  "-left-1.5 -top-1.5",
  "-right-1.5 -top-1.5",
  "-left-1.5 -bottom-1.5",
  "-right-1.5 -bottom-1.5",
  "left-1/2 -top-1.5 -translate-x-1/2",
  "left-1/2 -bottom-1.5 -translate-x-1/2",
  "-left-1.5 top-1/2 -translate-y-1/2",
  "-right-1.5 top-1/2 -translate-y-1/2",
];

/** กรอบเลือกแบบในโปรแกรมออกแบบ */
export function Selection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative border-[1.5px] border-blue-500 ${className}`}>
      {children}
      {handles.map((p) => (
        <span key={p} aria-hidden className={`absolute ${p} h-2.5 w-2.5 border-[1.5px] border-blue-500 bg-white`} />
      ))}
    </div>
  );
}

export function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`sticker ${className}`}>
      <path d="M3 2l7 19 2.6-7.4L20 11z" fill="#facc15" stroke="#1f2937" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/** สติกเกอร์อีโมจิลอยตกแต่ง */
export function Sticker({
  children,
  className = "",
  rotate = 0,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      className={`sticker animate-float pointer-events-none absolute select-none ${className}`}
      style={{ ["--r" as string]: `${rotate}deg`, animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

export function SectionHeading({ en, th, light = false }: { en: string; th: string; light?: boolean }) {
  return (
    <div className="mb-10 flex flex-wrap items-end gap-x-4 gap-y-1">
      <h2
        className={`font-pixel text-4xl font-bold md:text-5xl ${
          light ? "text-white [text-shadow:4px_4px_0_#1d4fc4]" : "pixel-title"
        }`}
      >
        {en}
      </h2>
      <span className={`font-pixel text-3xl ${light ? "text-white/70" : "text-blue-300"}`}>»»»</span>
      <p className={`w-full font-heading text-lg ${light ? "text-white/85" : "text-muted"}`}>{th}</p>
    </div>
  );
}
