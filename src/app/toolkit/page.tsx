import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowUpRightIcon } from "@/components/Icons";
import { site } from "@/data/site";
import { toolkit } from "@/data/toolkit";

export const metadata: Metadata = {
  title: `${toolkit.title} (${toolkit.subtitle})`,
  description: toolkit.description,
};

export default function ToolkitPage() {
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    toolkit.updates.mailSubject,
  )}`;

  return (
    <>
      {/* 본문 페이지이므로 홈으로 돌아가는 링크만 둡니다 */}
      <header
        id="top"
        className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0906]/85"
      >
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="block leading-none">
            <span className="text-lg font-extrabold tracking-[0.12em] text-slate-900 dark:text-white">
              {site.name}
            </span>
            {site.logo.tagline ? (
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.28em] text-brand-600 dark:text-brand-400">
                {site.logo.tagline}
              </span>
            ) : null}
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50"
          >
            홈으로
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {toolkit.title}{" "}
            <span className="text-gradient-gold">({toolkit.subtitle})</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {toolkit.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* 왼쪽 — 큰 안내 카드 + 기능 카드 3장 */}
          <div className="grid gap-5 lg:col-span-2">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-sunrise/10 px-6 py-14 text-center dark:border-brand-500/20 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5">
              <span
                className="flex size-24 items-center justify-center rounded-full bg-white text-5xl shadow-lg shadow-brand-500/10 ring-1 ring-brand-200/60 dark:bg-white/10 dark:ring-white/10"
                aria-hidden
              >
                {toolkit.emoji}
              </span>
              <span className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-bold text-brand-800 shadow-sm ring-1 ring-brand-200/60 dark:bg-white/10 dark:text-brand-300 dark:ring-white/10">
                {toolkit.badge}
              </span>
            </div>

            <ul className="grid gap-5 sm:grid-cols-3">
              {toolkit.features.map((feature) => (
                <li
                  key={feature.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="text-2xl" aria-hidden>
                    {feature.emoji}
                  </span>
                  <h2 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 — 진행 상황 · 기술 스택 · 소식 받기 */}
          <div className="grid content-start gap-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                개발 진행 상황
              </h2>

              <ul className="mt-5 space-y-4">
                {toolkit.progress.map((item) => (
                  <li key={item.label}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {item.label}
                      </span>
                      {typeof item.percent === "number" ? (
                        <span className="text-sm font-bold tabular-nums text-brand-700 dark:text-brand-400">
                          {item.percent}%
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                          진행 중
                        </span>
                      )}
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sunrise to-brand-500"
                        style={{ width: `${item.percent ?? 0}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                기술 스택
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {toolkit.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800 dark:bg-brand-500/10 dark:text-brand-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {toolkit.updates.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {toolkit.updates.description}
              </p>
              <a
                href={mailHref}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sunrise to-brand-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition hover:brightness-110"
              >
                {toolkit.updates.label}
              </a>
            </section>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-300"
          >
            다른 프로젝트 보기
          </Link>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-300"
          >
            문의하기
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
