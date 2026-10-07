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

// อีโมจิ 3 มิติจาก Microsoft Fluent Emoji (MIT) — เพิ่มอีโมจิใหม่ได้ที่นี่
const FLUENT = "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets";
const emoji3d: Record<string, string> = {
  "📐": "Triangular ruler/3D/triangular_ruler_3d.png",
  "⌨": "Keyboard/3D/keyboard_3d.png",
  "📁": "File folder/3D/file_folder_3d.png",
  "📋": "Clipboard/3D/clipboard_3d.png",
  "✏": "Pencil/3D/pencil_3d.png",
  "✂": "Scissors/3D/scissors_3d.png",
  "✉": "Envelope/3D/envelope_3d.png",
  "🧭": "Compass/3D/compass_3d.png",
  "🏨": "Hotel/3D/hotel_3d.png",
  "🛒": "Shopping cart/3D/shopping_cart_3d.png",
  "🩺": "Stethoscope/3D/stethoscope_3d.png",
  "🧮": "Abacus/3D/abacus_3d.png",
  "🤖": "Robot/3D/robot_3d.png",
  "🏠": "House/3D/house_3d.png",
  "⚖": "Balance scale/3D/balance_scale_3d.png",
  "🚚": "Delivery truck/3D/delivery_truck_3d.png",
  "🌟": "Glowing star/3D/glowing_star_3d.png",
  "💻": "Laptop/3D/laptop_3d.png",
  "🎨": "Artist palette/3D/artist_palette_3d.png",
  "🎓": "Graduation cap/3D/graduation_cap_3d.png",
  "🏮": "Red paper lantern/3D/red_paper_lantern_3d.png",
  "🍬": "Candy/3D/candy_3d.png",
  "🧩": "Puzzle piece/3D/puzzle_piece_3d.png",
  "🎟": "Admission tickets/3D/admission_tickets_3d.png",
  "👩‍💻": "Woman technologist/Default/3D/woman_technologist_3d_default.png",
};

export function emoji3dUrl(char: string) {
  const path = emoji3d[char.replace(/️/g, "")];
  return path ? `${FLUENT}/${encodeURI(path)}` : null;
}

/** แสดงอีโมจิเป็นภาพ 3 มิติ ขนาดตาม font-size (ถ้าไม่มีในรายการจะแสดงอีโมจิปกติ) */
export function Emoji3D({ char, className = "" }: { char: string; className?: string }) {
  const src = emoji3dUrl(char);
  if (!src) return <span className={className}>{char}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      draggable={false}
      loading="lazy"
      className={`inline-block h-[1.2em] w-[1.2em] object-contain ${className}`}
    />
  );
}

/** สติกเกอร์อีโมจิลอยตกแต่ง */
export function Sticker({
  children,
  className = "",
  rotate = 0,
  delay = 0,
}: {
  children: string;
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
      <Emoji3D char={children} />
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
