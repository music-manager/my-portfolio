import Image from "next/image";
import { site } from "@/data/site";
import { ArrowUpRightIcon, YoutubeIcon } from "./Icons";
import Section from "./Section";

// 주제별 색을 달리해 채널 카드에 색감을 줍니다
const tagTones: Record<string, string> = {
  음악: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  감동: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  요리: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300",
  미용: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  쇼핑: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
};
const defaultTone =
  "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300";

export default function Channels() {
  const { channels } = site;

  if (channels.items.length === 0) return null;

  return (
    <Section
      id="channels"
      eyebrow="Channels"
      title={channels.heading}
      description={channels.description}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.items.map((channel) => (
          <li key={channel.handle}>
            <a
              href={channel.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40"
            >
              <div className="flex items-center gap-3">
                {/* 프로필 사진이 있으면 사진을, 없으면 이모지를 보여 줍니다 */}
                {channel.avatar ? (
                  <Image
                    src={channel.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full object-cover ring-1 ring-brand-200/60 dark:ring-white/10"
                    aria-hidden
                  />
                ) : (
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-orange-50 text-xl ring-1 ring-brand-200/60 dark:from-white/10 dark:to-white/5 dark:ring-white/10"
                    aria-hidden
                  >
                    {channel.emoji}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-1 text-base font-semibold text-slate-900 dark:text-white">
                    <span className="truncate">{channel.name}</span>
                    <ArrowUpRightIcon className="size-3.5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
                  </h3>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-500">
                    {channel.handle}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {channel.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold ${
                    tagTones[channel.tag] ?? defaultTone
                  }`}
                >
                  <YoutubeIcon className="size-3.5 text-red-500" />
                  {channel.tag}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
