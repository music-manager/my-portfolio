import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="transition hover:text-slate-900 dark:hover:text-white"
        >
          맨 위로 ↑
        </a>
      </div>
    </footer>
  );
}
