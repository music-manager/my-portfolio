import { site } from "@/data/site";
import { ArrowUpRightIcon, socialIcons } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const { contact } = site;

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      description={contact.description}
      className="bg-slate-50/70 dark:bg-white/[0.03]"
    >
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-8 shadow-sm sm:p-10 dark:border-white/10 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5">
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
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40"
              >
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-gradient-to-br group-hover:from-sunrise group-hover:to-brand-500 group-hover:text-white dark:bg-white/10 dark:text-slate-300">
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
