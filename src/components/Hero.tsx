import Image from "next/image";
import { site } from "@/data/site";
import { ArrowUpRightIcon, socialIcons } from "./Icons";

export default function Hero() {
  const { hero } = site;
  const avatarSrc = hero.avatar || site.logo.mark;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* 배경 그라데이션 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-brand-100)_0%,transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(29,104,240,0.18)_0%,transparent_70%)]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-5 text-center sm:px-8 md:flex-row md:items-center md:gap-14 md:text-left">
        <div className="animate-fade-up order-2 flex-1 md:order-1">
          {hero.badge ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
              <span className="size-1.5 rounded-full bg-brand-500" />
              {hero.badge}
            </span>
          ) : null}

          <h1 className="mt-5 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            {hero.headline}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-pretty text-slate-600 sm:text-lg dark:text-slate-400">
            {hero.tagline}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {hero.primaryCta.label}
              <ArrowUpRightIcon className="size-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-800 dark:text-slate-500 dark:hover:border-brand-600 dark:hover:text-brand-400"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="animate-fade-up order-1 md:order-2">
          <div className="relative size-36 sm:size-44 md:size-52">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-400/40 to-brand-200/10 blur-xl"
            />
            <div className="relative size-full overflow-hidden rounded-full border-4 border-white bg-slate-950 shadow-xl dark:border-slate-800">
              {avatarSrc ? (
                <Image
                  src={avatarSrc}
                  alt={
                    hero.avatar
                      ? `${site.name} 프로필 사진`
                      : `${site.name} 로고`
                  }
                  fill
                  priority
                  sizes="(min-width: 768px) 13rem, 9rem"
                  className="object-cover"
                />
              ) : (
                // 사진도 로고도 없으면 이름 첫 글자를 보여 줍니다
                <span className="flex size-full items-center justify-center text-4xl font-bold text-white">
                  {site.name.slice(0, 1)}
                </span>
              )}
            </div>
          </div>
          <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-white">
            {site.name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{site.role}</p>
        </div>
      </div>
    </section>
  );
}
