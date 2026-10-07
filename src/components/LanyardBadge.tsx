"use client";

import dynamic from "next/dynamic";

// three.js ใช้ได้เฉพาะฝั่งเบราว์เซอร์ จึงปิด SSR
const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export default function LanyardBadge({ className = "" }: { className?: string }) {
  return <Lanyard className={className} />;
}
