import { site } from "@/data/site";
import { ArrowUpRightIcon, NaverIcon } from "./Icons";
import Section from "./Section";

const accentStyles = {
  naver: "bg-naver text-white",
  kmong: "bg-kmong text-slate-950",
  neutral: "bg-slate-900 text-white dark:bg-white dark:text-slate-900",
} as const;

export default function Services() {
  const { services } = site;

  if (services.items.length === 0) return null;

  return (
    <Section
      id="services"
      eyebrow="Services"
      title={services.heading}
      description={services.description}
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => (
          <li
            key={service.href}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                  accentStyles[service.accent]
                }`}
              >
                {service.accent === "naver" ? (
                  <NaverIcon className="size-3" />
                ) : null}
                {service.platform}
              </span>
              {service.price ? (
                <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-400">
                  {service.price}
                </span>
              ) : null}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {service.description}
            </p>

            {service.points.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}

            {/* CTA는 카드 높이와 상관없이 항상 맨 아래에 정렬됩니다 */}
            <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
              <a
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {service.cta}
                <ArrowUpRightIcon className="size-4" />
              </a>
              {service.proofHref ? (
                <a
                  href={service.proofHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 underline underline-offset-4 transition hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
                >
                  {service.proofLabel}
                  <ArrowUpRightIcon className="size-3" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
