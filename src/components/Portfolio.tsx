import Image from "next/image";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

export default function Portfolio() {
  const { portfolio } = site;

  if (portfolio.items.length === 0) return null;

  const [featured, ...rest] = portfolio.items;

  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title={portfolio.heading}
      description={portfolio.description}
      className="bg-slate-50/70 dark:bg-white/[0.03]"
    >
      {/* 모든 항목을 한 줄에 하나씩, 캡처를 크게 보여 줍니다.
          첫 항목만 '대표작' 배지와 큰 글씨로 강조합니다. */}
      <ul className="grid gap-5">
        <li>
          <Card item={featured} featured />
        </li>
        {rest.map((item) => (
          <li key={item.href}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

/**
 * 포트폴리오 카드 한 장.
 * PC(md 이상)에서는 왼쪽 설명 + 오른쪽 캡처로 나뉘고,
 * 모바일에서는 캡처가 위, 설명이 아래로 쌓입니다.
 */
function Card({
  item,
  featured = false,
}: {
  item: (typeof site.portfolio.items)[number];
  featured?: boolean;
}) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 sm:p-6 md:grid-cols-2 md:items-center dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40"
    >
      <Preview item={item} className="md:order-2" />

      <div className="md:order-1 md:px-2">
        {featured ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-800 dark:bg-brand-500/15 dark:text-brand-300">
            대표작 · {item.type}
          </span>
        ) : (
          <span className="block text-xs font-semibold tracking-wide text-brand-600 uppercase dark:text-brand-400">
            {item.type}
          </span>
        )}

        <h3
          className={`flex items-center gap-2 font-extrabold text-slate-900 dark:text-white ${
            featured ? "mt-4 text-2xl sm:text-3xl" : "mt-2 text-xl sm:text-2xl"
          }`}
        >
          {item.client}
          <ArrowUpRightIcon
            className={`shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500 ${
              featured ? "size-5" : "size-4"
            }`}
          />
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
          {item.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

/**
 * 사이트 첫 화면 캡처.
 * thumbnail 이 비어 있으면 도메인만 적힌 브라우저 창 모양으로 대체합니다.
 */
function Preview({
  item,
  className = "",
}: {
  item: (typeof site.portfolio.items)[number];
  className?: string;
}) {
  const host = item.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {/* 브라우저 창처럼 보이게 하는 상단 바 */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/5">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-2 truncate text-[10px] text-slate-400 dark:text-slate-500">
          {host}
        </span>
      </div>

      <div className="relative aspect-video">
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={`${item.client} 첫 화면`}
            fill
            sizes="(min-width: 768px) 30rem, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/5 dark:to-transparent">
            <span className="text-sm font-semibold text-slate-400 dark:text-slate-600">
              {item.client}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
