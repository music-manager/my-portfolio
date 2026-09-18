import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

export default function Portfolio() {
  const { portfolio } = site;

  if (portfolio.items.length === 0) return null;

  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title={portfolio.heading}
      description={portfolio.description}
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {portfolio.items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-700"
            >
              <span className="text-xs font-semibold tracking-wide text-brand-600 uppercase dark:text-brand-400">
                {item.type}
              </span>

              <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-slate-900 dark:text-white">
                {item.client}
                <ArrowUpRightIcon className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
