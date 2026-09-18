import { site } from "@/data/site";
import { ArrowUpRightIcon, YoutubeIcon } from "./Icons";
import Section from "./Section";

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
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-red-800"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl dark:bg-slate-800"
                  aria-hidden
                >
                  {channel.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1 text-base font-semibold text-slate-900 dark:text-white">
                    <span className="truncate">{channel.name}</span>
                    <ArrowUpRightIcon className="size-3.5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500" />
                  </p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-500">
                    {channel.handle}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {channel.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">
                  <YoutubeIcon className="size-3.5" />
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
