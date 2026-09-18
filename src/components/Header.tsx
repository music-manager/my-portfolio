"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-[#0c0906]/85"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label={`${site.name} 홈`} className="shrink-0">
          {site.logo.wordmarkLight && site.logo.wordmarkDark ? (
            <>
              <Image
                src={site.logo.wordmarkLight}
                alt={site.name}
                width={site.logo.width}
                height={site.logo.height}
                priority
                className="h-[18px] w-auto dark:hidden"
              />
              <Image
                src={site.logo.wordmarkDark}
                alt={site.name}
                width={site.logo.width}
                height={site.logo.height}
                priority
                className="hidden h-[18px] w-auto dark:block"
              />
            </>
          ) : (
            // 로고 이미지가 없으면 사이트 이름을 워드마크 대신 표시합니다
            <span className="block leading-none">
              <span className="text-lg font-extrabold tracking-[0.12em] text-slate-900 dark:text-white">
                {site.name}
              </span>
              {site.logo.tagline ? (
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.28em] text-brand-600 dark:text-brand-400">
                  {site.logo.tagline}
                </span>
              ) : null}
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.headerCta.href}
            className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold whitespace-nowrap text-white shadow-sm transition hover:bg-slate-700 xl:inline-flex dark:bg-brand-500 dark:text-slate-950 dark:hover:bg-brand-400"
          >
            {site.headerCta.label}
            <span aria-hidden>→</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="메뉴 열기"
            className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 lg:hidden dark:border-slate-800 dark:text-slate-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              className="size-4.5"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
