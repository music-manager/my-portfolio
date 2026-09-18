import Image from "next/image";
import { site } from "@/data/site";
import { ArrowUpRightIcon, MailIcon, socialIcons } from "./Icons";

// 소셜 아이콘마다 브랜드 색을 입혀 히어로에 색감을 더합니다
const socialColors: Record<string, string> = {
  youtube: "text-red-500",
  naver: "text-naver",
  spotify: "text-[#1db954]",
  github: "text-slate-800 dark:text-slate-200",
  blog: "text-sky-500",
  mail: "text-brand-500",
};

export default function Hero() {
  const { hero } = site;
  const avatarSrc = hero.avatar || site.logo.mark;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* 로고의 일출 장면을 그라데이션으로 옮긴 배경 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-brand-50 to-white dark:from-[#141009] dark:via-[#120c07] dark:to-[#0c0906]" />
        <div className="absolute -top-24 right-[-10%] size-[46rem] rounded-full bg-[radial-gradient(circle,var(--color-dusk)_0%,transparent_65%)] opacity-70 blur-2xl dark:opacity-25" />
        <div className="absolute top-32 right-[12%] size-[26rem] rounded-full bg-[radial-gradient(circle,var(--color-sunrise)_0%,transparent_65%)] opacity-40 blur-2xl dark:opacity-25" />
        <div className="absolute -bottom-32 left-[-8%] size-[38rem] rounded-full bg-[radial-gradient(circle,var(--color-sky)_0%,transparent_65%)] opacity-30 blur-2xl dark:opacity-15" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
        <div className="flex flex-col items-center gap-12 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left">
          {/* ---------- 왼쪽: 문구 ---------- */}
          <div className="animate-fade-up order-2 w-full lg:order-1 lg:flex-[1.15]">
            {hero.badge ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/60 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-700 shadow-sm backdrop-blur dark:border-brand-700/50 dark:bg-white/5 dark:text-brand-300">
                <span className="size-1.5 rounded-full bg-sunrise" />
                {hero.badge}
              </span>
            ) : null}

            <h1 className="mt-6 text-3xl leading-[1.25] font-extrabold tracking-tight text-balance text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {hero.headline}
              <br />
              <span className="text-gradient-gold">{hero.headlineAccent}</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">
              {hero.tagline}
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                {hero.primaryCta.label}
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-500/50"
              >
                <MailIcon className="size-4" />
                {hero.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className={`inline-flex size-11 items-center justify-center rounded-full bg-white shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/10 dark:ring-white/10 ${
                        socialColors[social.icon] ?? "text-slate-600"
                      }`}
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- 오른쪽: 로고 엠블럼 ---------- */}
          <div className="animate-fade-up relative order-1 flex w-full items-center justify-center lg:order-2 lg:flex-[0.85]">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,var(--color-sunrise)_0%,transparent_60%)] opacity-45 blur-3xl"
              />
              <div className="animate-float relative size-52 sm:size-64 lg:size-80">
                <Image
                  src={avatarSrc}
                  alt={
                    hero.avatar ? `${site.name} 프로필 사진` : `${site.name} 로고`
                  }
                  fill
                  priority
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 13rem"
                  className="rounded-full object-contain drop-shadow-[0_18px_45px_rgba(180,110,20,0.35)]"
                />
              </div>
            </div>

            {/* 손글씨처럼 곁들이는 문구 — 넓은 화면에서만 */}
            {hero.quote.length > 0 ? (
              <p className="absolute top-0 -right-6 hidden max-w-[9.5rem] rotate-[-4deg] text-sm leading-7 font-medium text-slate-500 2xl:block dark:text-slate-400">
                {hero.quote.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>

        {/* ---------- 하단 모서리 문구 ---------- */}
        <div className="mt-12 hidden items-end justify-between text-[10px] leading-4 font-semibold tracking-[0.2em] text-slate-400 sm:flex dark:text-slate-600">
          <p>
            {hero.cornerLeft.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="text-right">
            {hero.cornerRight.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
