"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // 사생활 보호 모드 등에서 localStorage 접근이 막힐 수 있음
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-700 dark:hover:text-brand-400"
    >
      {mounted && isDark ? (
        <SunIcon className="size-4.5" />
      ) : (
        <MoonIcon className="size-4.5" />
      )}
    </button>
  );
}
