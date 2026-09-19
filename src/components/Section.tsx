import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  /** 제목 둘째 줄 — 골드 그라데이션으로 표시됩니다 */
  titleAccent?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  titleAccent,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    // 앵커로 이동할 때 섹션의 위쪽 여백(py-20 / sm:py-28)을 건너뛰도록
    // 음수 scroll-margin 을 줍니다. 이렇게 해야 제목이 고정 헤더 바로
    // 아래에 붙고, 헤더와 제목 사이가 휑하게 비지 않습니다.
    <section
      id={id}
      className={`-scroll-mt-16 py-20 sm:-scroll-mt-24 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-brand-600 uppercase dark:text-brand-400">
          <span className="h-px w-6 bg-gradient-to-r from-sunrise to-brand-400" />
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {title}
          {titleAccent ? (
            <>
              <br />
              <span className="text-gradient-gold">{titleAccent}</span>
            </>
          ) : null}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {description}
          </p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
