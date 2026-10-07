"use client";

import FolderFloat, { type FolderFloatProps } from "@/components/FolderFloat";
import { profile } from "@/data/profile";

// แฟ้มสีเหลืองให้เข้ากับธีมเว็บ
const yellow: Partial<FolderFloatProps> = {
  folderColor: "#f2b632",
  frontColor: "#ffd34c",
  paperColor: "#ffffff",
  itemColor: "#fbfaf5",
  itemTextColor: "#1f2a44",
  labelColor: "#1f2a44",
  width: 150,
  height: 112,
  spread: 120,
  trigger: "hover",
};

/** แฟ้มในหน้าแรก — กดป้ายแล้วเลื่อนไปยังส่วนนั้นของหน้า */
export function SectionFolder({ className = "" }: { className?: string }) {
  const sections = [
    { label: "👩‍💻 เกี่ยวกับฉัน", value: "#about" },
    { label: "🗂 ประสบการณ์", value: "#experience" },
    { label: "✨ ผลงาน", value: "#projects" },
    { label: "✉️ ติดต่อ", value: "#contact" },
  ];
  return (
    <FolderFloat
      {...yellow}
      className={className}
      label={profile.nickname}
      sublabel="ไปที่…"
      items={sections}
      onSelect={(href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
    />
  );
}

/** แฟ้มในส่วนเกี่ยวกับ — กดป้ายแล้วเปิดลิงก์ */
export function LinksFolder({ className = "" }: { className?: string }) {
  const links = [
    ...profile.socials.map((s) => ({ label: s.label, value: s.href })),
    { label: "✉️ Email", value: `mailto:${profile.email}` },
  ];
  return (
    <FolderFloat
      {...yellow}
      className={className}
      label="Links"
      sublabel={`${links.length} ลิงก์`}
      items={links}
      onSelect={(href) => {
        if (href.startsWith("mailto:")) window.location.href = href;
        else window.open(href, "_blank", "noopener,noreferrer");
      }}
    />
  );
}
