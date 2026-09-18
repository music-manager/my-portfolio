import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowUpRightIcon } from "@/components/Icons";
import { privacy } from "@/data/privacy";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: privacy.title,
  description: `${site.name} 사이트의 개인정보 수집·이용에 관한 안내입니다.`,
};

export default function PrivacyPage() {
  return (
    <>
      {/* 본문 페이지이므로 홈으로 돌아가는 링크만 둡니다 */}
      <header
        id="top"
        className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0906]/85"
      >
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-5 sm:px-8">
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
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50"
          >
            홈으로
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-600 uppercase dark:text-brand-400">
          <span className="h-px w-6 bg-gradient-to-r from-sunrise to-brand-400" />
          Privacy
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {privacy.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
          시행일 · {privacy.updatedAt}
        </p>

        <p className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-6 text-base leading-relaxed text-slate-700 dark:border-white/10 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5 dark:text-slate-300">
          {privacy.intro}
        </p>

        <div className="mt-14 space-y-14">
          {privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                {section.heading}
              </h2>

              <div className="mt-5 space-y-7">
                {section.blocks.map((block, index) => (
                  <div key={block.subheading || `${section.heading}-${index}`}>
                    {block.subheading ? (
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                        {block.subheading}
                      </h3>
                    ) : null}

                    {block.body ? (
                      <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {block.body}
                      </p>
                    ) : null}

                    {section.heading.startsWith("7.") ? (
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunrise to-brand-500" />
                          책임자: {privacy.officer}
                        </li>
                        <li className="flex items-start gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunrise to-brand-500" />
                          연락처:{" "}
                          <a
                            href={`mailto:${site.contact.email}`}
                            className="font-medium text-brand-700 underline underline-offset-4 dark:text-brand-400"
                          >
                            {site.contact.email}
                          </a>
                        </li>
                      </ul>
                    ) : null}

                    {block.items.length > 0 ? (
                      <ul className="mt-3 space-y-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-400"
                          >
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunrise to-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {"note" in block && block.note ? (
                      <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                        {block.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-300"
          >
            Google 개인정보처리방침
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-300"
          >
            Google Analytics 차단 부가기능
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-300"
          >
            문의하기
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
