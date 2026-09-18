import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

export default function Projects() {
  if (site.projects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="운영 중인 사이트와 도구"
      description="직접 기획하고 운영하는 사이트와 내부 제작 도구입니다. 카드를 누르면 해당 사이트로 이동합니다."
      className="bg-slate-50/70 dark:bg-white/[0.03]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {site.projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-2xl" aria-hidden>
                {project.emoji}
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                {project.status}
              </span>
            </div>

            <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
              <ArrowUpRightIcon className="size-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-medium text-brand-800 dark:bg-brand-500/10 dark:text-brand-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
