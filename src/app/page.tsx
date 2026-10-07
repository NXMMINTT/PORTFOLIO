import { Cursor, Emoji3D, SectionHeading, Selection, Sticker } from "@/components/Decor";
import { LinksFolder, SectionFolder } from "@/components/FolderMenus";
import LanyardBadge from "@/components/LanyardBadge";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { about, activities, education, experience, profile, projects, skills } from "@/data/profile";


const thumbColors = [
  "from-blue-500 to-indigo-600",
  "from-amber-300 to-yellow-400",
  "from-pink-400 to-rose-500",
  "from-emerald-400 to-teal-500",
];

const cardTilt = ["-rotate-3", "rotate-2 md:translate-y-6", "-rotate-2", "rotate-3 md:translate-y-6"];

/** แถบท้ายเว็บ — กระดาษสีขาวแบบเดียวกับ navbar */
function FooterBar() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-ink bg-paper px-5 py-4 text-sm shadow-[3px_3px_0_#1f2a44] md:flex-row md:justify-between">
      <a href="#top" className="font-pixel text-lg font-bold text-ink">
        {profile.nickname}
        <span className="text-pink">.</span>
      </a>
      <a href={`mailto:${profile.email}`} className="font-semibold text-brand hover:underline">
        ✉ {profile.email}
      </a>
    </div>
  );
}

export default function Home() {

  return (
    <>
      <Navbar />
      <main id="top" className="flex-1 overflow-x-hidden">
        {/* ============ Hero ============ */}
        <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 pt-24 pb-12">
          <Sticker className="-left-2 top-24 text-6xl md:left-0 md:text-8xl" rotate={-15}>📐</Sticker>
          <Sticker className="right-4 top-20 hidden text-7xl md:block" rotate={10} delay={1}>⌨️</Sticker>
          <div
            className="animate-float absolute left-0 top-[52%] z-30 hidden lg:block"
            style={{ ["--r" as string]: "-4deg", animationDelay: "2s" }}
          >
            <SectionFolder />
          </div>
          <Sticker className="-right-2 top-1/3 text-6xl md:text-8xl" rotate={12} delay={0.5}>📋</Sticker>
          <Sticker className="bottom-44 left-2 hidden text-7xl md:block" rotate={-35} delay={1.5}>✏️</Sticker>
          <Sticker className="bottom-44 right-6 hidden text-7xl md:block" rotate={20} delay={2.5}>✂️</Sticker>

          <Reveal>
            <div className="paper-shadow relative mx-auto w-full max-w-4xl -rotate-1">
              <span className="clip" style={{ left: "78%" }} />
              <div className="paper torn-bottom holes-top px-6 pt-16 pb-14 md:px-16">
                <span aria-hidden className="absolute left-[12%] top-16 text-2xl text-blue-500">✦</span>
                <span aria-hidden className="absolute right-[10%] top-24 text-xl text-pink">✦</span>

                <div className="relative mx-auto w-fit">
                  <Selection className="px-4 py-3 md:px-8 md:py-5">
                    <h1 className="pixel-title font-pixel text-6xl font-bold leading-[0.95] sm:text-8xl md:text-[8.5rem]">
                      PORT
                      <br />
                      <span className="pl-[0.6em]">FOLIO</span>
                    </h1>
                  </Selection>
                  <span className="absolute -right-3 -top-3 z-10 rotate-6 rounded-lg border-2 border-ink bg-pink px-3 py-0.5 font-heading text-xl font-medium text-white shadow-[3px_3px_0_#1f2a44] sm:-right-8 sm:-top-4 sm:text-3xl">
                    ผลงาน<span className="text-yellow-300">.</span>
                  </span>
                  <span className="absolute -bottom-5 -left-4 -rotate-12 rounded-md bg-white px-2 font-pixel text-2xl font-bold text-pink shadow-md sm:text-4xl">
                    2026
                  </span>
                  <Cursor className="absolute -bottom-10 right-4 h-10 w-10 md:h-14 md:w-14" />
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                  <div>
                    <p className="font-heading text-2xl font-medium md:text-3xl">{profile.name}</p>
                    <p className="mt-1 font-heading text-lg text-pink">{profile.role}</p>
                    {/* ตัดบรรทัดเฉพาะตรงช่องว่างระหว่างวลี กันคำไทยหรือ "Full-Stack" ขาดกลางคำ */}
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                      {profile.tagline.split(/ (?=ผู้)/).map((part) => (
                        <span key={part} className="inline-block pr-1.5">
                          {part.replaceAll("-", "\u2011")}
                        </span>
                      ))}
                    </p>
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

                  {/* ตอนนี้ทำอะไรอยู่ — ดึงจากประสบการณ์ที่ current และการศึกษา */}
                  <div className="relative rotate-1 rounded-xl border-2 border-dashed border-brand/40 bg-white/80 p-4 md:justify-self-end">
                    <p className="mb-3 flex items-center gap-2 font-pixel text-xs font-bold text-brand">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-pink" /> NOW
                    </p>
                    <ul className="space-y-2.5 text-sm">
                      {experience
                        .filter((e) => e.current)
                        .map((e) => (
                          <li key={e.title} className="flex items-center gap-3">
                            <Emoji3D char={e.emoji} className="shrink-0 text-xl" />
                            <span className="leading-tight">
                              <span className="block font-semibold">{e.title.replace(/\s*\(.*\)$/, "")}</span>
                              <span className="text-xs text-muted">{e.org.split(" · ")[0]}</span>
                            </span>
                          </li>
                        ))}
                      <li className="flex items-center gap-3">
                        <Emoji3D char="🎓" className="shrink-0 text-xl" />
                        <span className="leading-tight">
                          <span className="block font-semibold">{education.degree}</span>
                          <span className="text-xs text-muted">{education.school}</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ About ============ */}
        <section id="about" className="relative mx-auto w-full max-w-6xl px-5 py-20">
          <Reveal>
            <div className="board relative">
              <div
                className="animate-float absolute -right-2 -top-16 z-30 md:-right-10"
                style={{ ["--r" as string]: "6deg" }}
              >
                <LinksFolder />
              </div>

              <div className="grid-paper holes-top rounded-xl px-5 pt-14 pb-8 md:px-10">
                <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
                  {/* ป้ายห้อยคอ */}
                  <div className="relative mx-auto w-full max-w-[300px]">
                    {/* canvas กว้างกว่าคอลัมน์ ลากป้ายออกด้านข้างได้โดยไม่โดนตัด */}
                    <LanyardBadge className="pointer-events-none absolute -top-14 left-1/2 z-20 h-[600px] w-[calc(100vw-40px)] max-w-[760px] -translate-x-1/2 lg:left-[-80px] lg:translate-x-0" />
                    <div aria-hidden className="h-[510px]" />
                    <p className="text-center font-heading text-xs text-muted">✦ ลองลากป้ายเล่นดูสิ ✦</p>
                  </div>

                  {/* เนื้อหา */}
                  <div>
                    <Selection className="mb-8 w-fit px-3 py-1">
                      <h2 className="pixel-title font-pixel text-4xl font-bold md:text-5xl">ABOUT ME</h2>
                    </Selection>

                    <p className="max-w-2xl leading-relaxed">{profile.intro}</p>
                    {about.map((p) => (
                      <p key={p} className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{p}</p>
                    ))}

                    <h3 className="mt-8 mb-3 font-heading text-lg font-medium">
                      ทักษะ <span className="text-brand">▾</span>
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {skills.map((g) => (
                        <div key={g.group} className="rounded-xl border border-dashed border-brand/30 bg-white/70 p-3">
                          <p className="mb-2 flex flex-wrap items-baseline gap-x-2">
                            <span className="font-heading font-medium text-brand">{g.group}</span>
                            <span className="text-[11px] text-muted">{g.th}</span>
                          </p>
                          <ul className="flex flex-wrap gap-1.5">
                            {g.items.map((s) => (
                              <li
                                key={s.name}
                                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white py-1 pr-2.5 pl-1.5 text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={s.icon} alt="" loading="lazy" className="h-4 w-4 object-contain" />
                                {s.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
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

        {/* ============ Experience ============ */}
        <section id="experience" className="relative mx-auto w-full max-w-6xl px-5 py-20">
          <Reveal>
            <SectionHeading en="EXPERIENCE" th="เส้นทางการทำงาน" light />
          </Reveal>

          <ol className="relative mx-auto max-w-4xl">
            {/* เส้นไทม์ไลน์ */}
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-[16px] border-l-[3px] border-dashed border-white/70 md:left-[calc(50%-1px)]"
            />
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={e.title}
                  className={`relative mb-10 pl-14 md:w-1/2 md:pl-0 ${left ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
                >
                  <span
                    className={`absolute left-0 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-paper text-xl shadow-[2px_2px_0_#1f2a44] ${
                      left ? "md:left-auto md:-right-[18px]" : "md:-left-[18px]"
                    }`}
                  >
                    <Emoji3D char={e.emoji} />
                  </span>
                  <Reveal delay={i * 80}>
                    <article className={`paper-shadow relative transition hover:rotate-0 ${left ? "-rotate-1" : "rotate-1"}`}>
                      <div className="paper px-5 pt-4 pb-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-brand px-3 py-0.5 font-heading text-xs text-white">{e.period}</span>
                          {e.current && (
                            <span className="flex items-center gap-1 rounded-full bg-pink/15 px-2 py-0.5 text-[11px] font-semibold text-pink">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink" /> ตอนนี้
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 font-heading text-lg font-medium">{e.title}</h3>
                        <p className="text-sm font-semibold text-brand">{e.org}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.detail}</p>
                        {e.tags && (
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {e.tags.map((t) => (
                              <li key={t} className="rounded bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-brand">
                                {t}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          {/* การศึกษา */}
          <Reveal>
            <div className="relative mx-auto mt-6 w-fit max-w-full rotate-1 bg-yellow-200 px-6 py-5 shadow-[0_10px_20px_rgba(10,30,90,0.3)]">
              <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-white/60" />
              <div className="flex items-center gap-4">
                <Emoji3D char="🎓" className="text-4xl" />
                <div>
                  <p className="font-heading text-xs text-muted">การศึกษา · {education.period}</p>
                  <p className="font-heading text-lg font-medium">{education.degree}</p>
                  <p className="text-sm">
                    {education.school} · <span className="text-muted">{education.detail}</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* งานอาสาและกิจกรรม */}
          <div className="mt-24">
            {(
              [
                ["competition", "COMPETITIONS", "การแข่งขันและแฮกกาธอน"],
                ["volunteer", "VOLUNTEER", "งานอาสาและกิจกรรม"],
              ] as const
            ).map(([kind, en, th]) => (
              <div key={kind} className="mb-20 last:mb-0">
                <Reveal>
                  <SectionHeading en={en} th={th} light />
                </Reveal>
                <div className="grid gap-8 sm:grid-cols-2">
                  {activities
                    .filter((a) => a.kind === kind)
                    .map((a, i) => (
                      <Reveal key={a.event + a.role} delay={i * 80}>
                        <article
                          className={`paper-shadow relative h-full transition hover:rotate-0 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                        >
                          <span className="clip" />
                          <div className="paper flex h-full gap-4 px-5 pt-7 pb-5">
                            {a.image ? (
                              // รูปแบบโพลารอยด์: กรอบขาว เทปแปะ ปรับสีโทนฟิล์ม ชี้แล้วเป็นสีจริง
                              <figure
                                className={`group/photo relative w-32 shrink-0 self-start bg-white p-1.5 pb-7 shadow-[0_6px_14px_rgba(10,30,90,0.28)] transition duration-300 hover:z-10 hover:rotate-0 hover:scale-110 ${
                                  i % 2 ? "rotate-3" : "-rotate-3"
                                }`}
                              >
                                <span
                                  aria-hidden
                                  className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-4deg] border border-white/60 bg-yellow-100/80 shadow-sm"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={a.image}
                                  alt={a.event}
                                  loading="lazy"
                                  className="aspect-[3/4] w-full object-cover [filter:sepia(0.28)_saturate(0.75)_contrast(1.05)_brightness(1.03)] transition duration-500 group-hover/photo:[filter:none]"
                                />
                                <figcaption className="absolute inset-x-0 bottom-1.5 truncate px-1.5 text-center font-heading text-[11px] text-ink/70">
                                  {a.award ? `${a.award.split(" ")[0]} ` : ""}
                                  {a.period}
                                </figcaption>
                              </figure>
                            ) : (
                              <Emoji3D char={a.emoji} className="shrink-0 text-4xl" />
                            )}
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-brand px-3 py-0.5 font-heading text-xs text-white">{a.period}</span>
                                {a.award && (
                                  <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-[11px] font-semibold text-ink">{a.award}</span>
                                )}
                              </div>
                              <h3 className="mt-2 font-heading text-lg font-medium">{a.role}</h3>
                              <p className="text-sm font-semibold text-brand">{a.event}</p>
                              <p className="text-xs text-muted">{a.org}</p>
                              <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.detail}</p>
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                </div>
              </div>
            ))}
          </div>
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
                      className={`relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br text-white shadow-inner ${thumbColors[i % thumbColors.length]}`}
                    >
                      {p.image ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={`ภาพหน้าจอ ${p.title}`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                          />
                          <Emoji3D
                            char={p.emoji}
                            className="absolute bottom-1.5 right-1.5 rounded-lg bg-white/90 p-1 text-3xl shadow"
                          />
                        </>
                      ) : (
                        <>
                          <Emoji3D char={p.emoji} className="text-5xl drop-shadow" />
                          <span className="mt-2 px-2 text-center font-heading font-medium drop-shadow">{p.title}</span>
                        </>
                      )}
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
        <FooterBar />
        <p className="mt-4 text-center font-heading text-sm text-white/85">
          © 2026 Thidarat Tarasi · ออกแบบและเขียนโค้ดด้วย <span className="text-pink">♡</span>
        </p>
      </footer>
    </>
  );
}
