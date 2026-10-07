"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#top", label: "หน้าแรก" },
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#projects", label: "ผลงาน" },
];
const cta = { href: "#contact", label: "ติดต่อ" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ไฮไลต์เมนูของ section ที่กำลังดูอยู่
  useEffect(() => {
    const sections = [...links, cta]
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-all ${scrolled ? "pt-2" : "pt-4"}`}>
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border-2 border-ink bg-paper px-4 transition-shadow md:px-5 ${
          scrolled || open ? "shadow-[4px_4px_0_#1f2a44]" : "shadow-[3px_3px_0_#1f2a44]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-pixel text-lg font-bold text-ink">
          <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm text-white">
            {profile.nickname.charAt(0)}
          </span>
          {profile.nickname}
          <span className="-ml-2 text-pink">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "page" : undefined}
                className={`block rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active === l.href ? "bg-brand text-white" : "text-ink hover:bg-brand/10 hover:text-brand"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={cta.href}
              className="block rounded-full border-2 border-ink bg-pink px-5 py-1 text-sm font-semibold text-white shadow-[2px_2px_0_#1f2a44] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#1f2a44]"
            >
              {cta.label} ✉
            </a>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink text-ink md:hidden"
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
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border-2 border-ink bg-paper p-3 shadow-[4px_4px_0_#1f2a44] md:hidden">
          {[...links, cta].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 font-semibold ${
                  l === cta
                    ? "mt-1 bg-pink text-white"
                    : active === l.href
                      ? "bg-brand text-white"
                      : "text-ink"
                }`}
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
