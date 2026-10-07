"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#top", label: "หน้าแรก" },
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#projects", label: "ผลงาน" },
  { href: "#contact", label: "ติดต่อ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "bg-desk-dark/85 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-pixel text-lg font-bold text-white">
          {profile.nickname}
          <span className="text-yellow-300">.</span>
        </a>

        <ul className="hidden items-center gap-3 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block rounded-full border border-amber-100/50 px-4 py-1.5 text-sm text-white/90 transition hover:bg-white hover:text-desk-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="เปิดเมนู"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-2 px-5 pb-5 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-full border border-amber-100/50 px-4 py-2.5 text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
