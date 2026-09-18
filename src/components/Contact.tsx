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
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 dark:border-slate-800 dark:bg-slate-900/60">
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
