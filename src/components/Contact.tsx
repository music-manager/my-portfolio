import { site } from "@/data/site";
import { ArrowUpRightIcon, NaverIcon, socialIcons } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const { contact } = site;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      description={contact.description}
    >
      {/* 유료 상담 CTA — 수익으로 바로 연결되는 링크라 가장 위에 배치 */}
      {contact.consult.href ? (
        <div className="mb-6 overflow-hidden rounded-2xl border border-naver/30 bg-naver/5 p-8 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-naver px-3 py-1 text-xs font-bold text-white">
            <NaverIcon className="size-3.5" />
            {contact.consult.badge}
          </span>

          <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
            {contact.consult.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {contact.consult.description}
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={contact.consult.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-naver px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {contact.consult.cta}
              <ArrowUpRightIcon className="size-4" />
            </a>
            {contact.consult.proofHref ? (
              <a
                href={contact.consult.proofHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 underline underline-offset-4 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {contact.consult.proofLabel}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8 sm:p-10 dark:border-slate-800 dark:bg-slate-900/60">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
          이메일로 연락하기
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-2 inline-flex items-center gap-2 text-xl font-bold break-all text-slate-900 transition hover:text-brand-600 sm:text-2xl dark:text-white dark:hover:text-brand-400"
        >
          {contact.email}
          <ArrowUpRightIcon className="size-5 shrink-0" />
        </a>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {site.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3.5 transition hover:border-brand-300 hover:bg-brand-50/50 dark:border-slate-800 dark:hover:border-brand-700 dark:hover:bg-brand-950/30"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-slate-800 dark:text-slate-400">
                  <Icon className="size-4.5" />
                </span>
                <span className="flex-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {social.label}
                </span>
                <ArrowUpRightIcon className="size-4 text-slate-400 transition group-hover:text-brand-500" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
