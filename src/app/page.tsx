import { Cursor, SectionHeading, Selection, Sticker } from "@/components/Decor";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { about, experience, profile, projects, skills } from "@/data/profile";

const tileColors = [
  "bg-[#330000] text-[#ff9a00]",
  "bg-[#001e36] text-[#31a8ff]",
  "bg-[#2e1065] text-[#c4b5fd]",
  "bg-[#00005b] text-[#9999ff]",
  "bg-[#052e16] text-[#4ade80]",
  "bg-[#3b0a2a] text-[#f472b6]",
];

const thumbColors = [
  "from-blue-500 to-indigo-600",
  "from-amber-300 to-yellow-400",
  "from-pink-400 to-rose-500",
  "from-emerald-400 to-teal-500",
];

const cardTilt = ["-rotate-3", "rotate-2 md:translate-y-6", "-rotate-2", "rotate-3 md:translate-y-6"];

const abbr = (s: string) => {
  const letters = s.replace(/[^A-Za-z]/g, "");
  return letters.charAt(0).toUpperCase() + letters.charAt(1).toLowerCase();
};

function InfoBar() {
  const items = [
    { k: "NAME", v: profile.nickname },
    { k: "EMAIL", v: profile.email },
    { k: "BASED IN", v: profile.location },
  ];
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-between">
      <span className="font-heading text-lg text-white md:text-xl">{profile.role}</span>
      <ul className="flex flex-wrap justify-center gap-2">
        {items.map((i) => (
          <li
            key={i.k}
            className="rounded-full border border-amber-100/50 px-4 py-1 text-center leading-tight text-white/90"
          >
            <span className="block font-pixel text-[10px] tracking-wider text-amber-100/80">{i.k}</span>
            <span className="text-xs">{i.v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const allSkills = skills.flatMap((g) => g.items);

  return (
    <>
      <Navbar />
      <main id="top" className="flex-1 overflow-x-hidden">
        {/* ============ Hero ============ */}
        <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pt-24 pb-12">
          <Sticker className="-left-2 top-24 text-6xl md:left-0 md:text-8xl" rotate={-15}>📐</Sticker>
          <Sticker className="right-4 top-20 hidden text-7xl md:block" rotate={10} delay={1}>⌨️</Sticker>
          <Sticker className="-left-4 top-1/2 hidden text-8xl lg:block" rotate={-8} delay={2}>📁</Sticker>
          <Sticker className="-right-2 top-1/3 text-6xl md:text-8xl" rotate={12} delay={0.5}>📋</Sticker>
          <Sticker className="bottom-28 left-2 hidden text-7xl md:block" rotate={-35} delay={1.5}>✏️</Sticker>
          <Sticker className="bottom-24 right-6 text-5xl md:text-7xl" rotate={20} delay={2.5}>✂️</Sticker>

          <Reveal>
            <div className="paper-shadow relative mx-auto w-full max-w-4xl -rotate-1">
              <span className="clip" style={{ left: "78%" }} />
              <div className="paper torn-bottom holes-top px-6 pt-16 pb-14 md:px-16">
                <span aria-hidden className="absolute left-[12%] top-16 text-2xl text-blue-500">✦</span>
                <span aria-hidden className="absolute right-[10%] top-24 text-xl text-pink">✦</span>
                <span aria-hidden className="absolute bottom-24 left-[8%] text-lg text-pink">✦</span>

                <div className="relative mx-auto w-fit">
                  <Selection className="px-4 py-3 md:px-8 md:py-5">
                    <h1 className="pixel-title font-pixel text-6xl font-bold leading-[0.95] sm:text-8xl md:text-[8.5rem]">
                      PORT
                      <br />
                      <span className="pl-[0.6em]">FOLIO</span>
                    </h1>
                  </Selection>
                  <span className="absolute -right-4 -top-6 font-heading text-2xl font-medium text-pink sm:-right-10 sm:text-4xl">
                    ผลงาน.
                  </span>
                  <span className="absolute -bottom-5 -left-4 -rotate-12 rounded-md bg-white px-2 font-pixel text-2xl font-bold text-pink shadow-md sm:text-4xl">
                    2026
                  </span>
                  <Cursor className="absolute -bottom-10 right-4 h-10 w-10 md:h-14 md:w-14" />
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
                  <div>
                    <p className="font-heading text-2xl font-medium md:text-3xl">{profile.name}</p>
                    <p className="mt-1 text-muted">{profile.tagline}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href="#projects"
                        className="rounded-full bg-brand px-6 py-2.5 font-semibold text-white shadow-[3px_3px_0_#1f2a44] transition hover:-translate-y-0.5"
                      >
                        ดูผลงาน
                      </a>
                      <a
                        href="#contact"
                        className="rounded-full border-2 border-ink bg-white px-6 py-2 font-semibold shadow-[3px_3px_0_#1f2a44] transition hover:-translate-y-0.5"
                      >
                        ติดต่อฉัน
                      </a>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-brand">
                    {[...skills.map((g) => `${g.group} Dev`), "UI / UX"].map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-brand" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <InfoBar />
          </Reveal>
        </section>

        {/* ============ About ============ */}
        <section id="about" className="relative mx-auto w-full max-w-6xl px-5 py-20">
          <Reveal>
            <div className="board relative">
              <Sticker className="-right-3 -top-10 text-7xl md:-right-8 md:text-8xl" rotate={12}>📁</Sticker>

              <div className="grid-paper holes-top rounded-xl px-5 pt-14 pb-8 md:px-10">
                <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
                  {/* ป้ายห้อยคอ */}
                  <div className="relative mx-auto w-full max-w-[260px] pt-10">
                    <span aria-hidden className="absolute left-1/2 top-0 h-14 w-8 -translate-x-1/2 rounded-sm bg-yellow-400 shadow" />
                    <div className="relative -rotate-3 rounded-2xl border-2 border-yellow-500 bg-yellow-300 p-3 shadow-xl">
                      <span aria-hidden className="mx-auto mb-3 block h-2 w-12 rounded-full bg-yellow-600/50" />
                      <div className="flex aspect-[4/5] items-center justify-center rounded-xl bg-white text-8xl">
                        👩‍💻
                      </div>
                    </div>
                    <div className="paper-shadow relative -mt-4 rotate-2">
                      <div className="paper torn-bottom px-5 pt-5 pb-7 text-sm">
                        <p className="mb-3 font-heading text-lg">
                          <span className="rounded bg-pink/15 px-1 text-pink">{profile.nickname}</span>
                        </p>
                        <dl className="space-y-1.5">
                          {[
                            ["ชื่อ", profile.name],
                            ["ตำแหน่ง", profile.role],
                            ["ที่อยู่", profile.location],
                          ].map(([k, v]) => (
                            <div key={k} className="flex gap-2 border-b border-dashed border-gray-300 pb-1">
                              <dt className="w-14 shrink-0 text-muted">{k}</dt>
                              <dd>{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>

                  {/* เนื้อหา */}
                  <div>
                    <Selection className="mb-8 w-fit px-3 py-1">
                      <h2 className="pixel-title font-pixel text-4xl font-bold md:text-5xl">ABOUT ME</h2>
                    </Selection>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h3 className="mb-4 font-heading text-lg font-medium">
                          ประสบการณ์ <span className="text-brand">▾</span>
                        </h3>
                        <ol className="space-y-5">
                          {experience.map((e) => (
                            <li key={e.title + e.period} className="text-sm">
                              <p className="flex flex-wrap gap-x-3">
                                <span className="text-muted">{e.period}</span>
                                <span className="font-semibold text-pink">{e.title}</span>
                              </p>
                              <p className="font-medium">{e.org}</p>
                              <p className="mt-1 text-muted">{e.detail}</p>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h3 className="mb-4 font-heading text-lg font-medium">
                          เกี่ยวกับฉัน <span className="text-brand">▾</span>
                        </h3>
                        <p className="text-sm leading-relaxed">{profile.intro}</p>
                        {about.map((p) => (
                          <p key={p} className="mt-2 text-sm leading-relaxed text-muted">{p}</p>
                        ))}

                        <h3 className="mt-8 mb-4 font-heading text-lg font-medium">
                          ทักษะ <span className="text-brand">▾</span>
                        </h3>
                        <ul className="flex flex-wrap gap-2.5">
                          {allSkills.map((s, i) => (
                            <li key={s} title={s} className="group flex w-12 flex-col items-center gap-1">
                              <span
                                className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold shadow transition group-hover:-translate-y-1 ${tileColors[i % tileColors.length]}`}
                              >
                                {abbr(s)}
                              </span>
                              <span className="w-full truncate text-center text-[10px] text-muted">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                      {[...skills.map((g) => g.group), "UI / UX"].map((t) => (
                        <span key={t} className="rounded-full border-2 border-brand/60 bg-white px-4 py-1 text-sm text-brand">
                          {t}
                        </span>
                      ))}
                      <span className="ml-auto rotate-3 bg-yellow-200 px-4 py-2 font-heading text-sm shadow-md">
                        📌 พร้อมรับงานใหม่!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ Projects ============ */}
        <section id="projects" className="relative mx-auto w-full max-w-6xl px-5 py-20">
          <Reveal>
            <SectionHeading en="CONTENTS" th="ผลงานที่ภูมิใจ" light />
          </Reveal>
          <Sticker className="right-2 top-16 hidden text-7xl md:block" rotate={-10}>📐</Sticker>

          <div className="grid gap-12 pt-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article
                  className={`paper-shadow group relative transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105 ${cardTilt[i % cardTilt.length]}`}
                >
                  <span className="clip" />
                  <div className="paper holes-left torn-bottom pl-9 pr-5 pt-7 pb-9">
                    <div
                      className={`flex aspect-[4/3] flex-col items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-inner ${thumbColors[i % thumbColors.length]}`}
                    >
                      <span className="text-5xl drop-shadow">{p.emoji}</span>
                      <span className="mt-2 px-2 text-center font-heading font-medium drop-shadow">{p.title}</span>
                    </div>
                    <p className="mt-4 font-pixel text-3xl font-bold text-gray-300">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-heading text-xl font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-brand">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-4 text-sm font-semibold">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="text-pink hover:underline">
                          ดูเว็บจริง →
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                          Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ Contact ============ */}
        <section id="contact" className="relative mx-auto w-full max-w-6xl px-5 py-24">
          <Sticker className="left-2 top-10 text-6xl md:left-16 md:text-8xl" rotate={-12}>✉️</Sticker>
          <Sticker className="bottom-10 right-4 text-6xl md:right-20 md:text-7xl" rotate={15} delay={1}>🧭</Sticker>
          <Reveal>
            <div className="paper-shadow relative mx-auto max-w-2xl rotate-1">
              <span className="clip" />
              <div className="grid-paper holes-top torn-bottom px-6 pt-16 pb-14 text-center md:px-14">
                <Selection className="mx-auto w-fit px-4 py-2">
                  <h2 className="pixel-title font-pixel text-4xl font-bold md:text-6xl">
                    LET&apos;S TALK<span className="text-pink">!</span>
                  </h2>
                </Selection>
                <p className="mx-auto mt-6 max-w-md font-heading text-lg">
                  มีโปรเจกต์ที่น่าสนใจ หรืออยากชวนคุยเรื่องงาน ส่งข้อความมาได้เลย
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-8 inline-block break-all rounded-full bg-brand px-7 py-3 font-semibold text-white shadow-[4px_4px_0_#1f2a44] transition hover:-translate-y-0.5"
                >
                  ✉ {profile.email}
                </a>
                <ul className="mt-6 flex justify-center gap-3">
                  {profile.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-full border-2 border-ink bg-white px-5 py-1.5 text-sm font-semibold transition hover:bg-pink hover:text-white"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 pb-8">
        <InfoBar />
        <p className="mt-6 text-center text-xs text-white/60">© 2026 {profile.name} · Made with Next.js</p>
      </footer>
    </>
  );
}
