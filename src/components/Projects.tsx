import Link from "next/link";
import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

type Project = (typeof site.projects)[number];

const cardClass =
  "group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/40";

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
        {site.projects.map((project) =>
          // "/" 로 시작하면 이 사이트 안의 페이지이므로 새 창으로 열지 않습니다
          project.href.startsWith("/") ? (
            <Link key={project.title} href={project.href} className={cardClass}>
              <Body project={project} />
            </Link>
          ) : (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={cardClass}
            >
              <Body project={project} />
            </a>
          ),
        )}
      </div>

      {/* 카드 4장 아래에 대표 프로젝트를 한 칸 크게 둡니다 */}
      {site.projectFeature.title ? <Feature /> : null}
    </Section>
  );
}

function Feature() {
  const f = site.projectFeature;

  return (
    <Link
      href={f.href}
      className="group mt-5 grid gap-6 overflow-hidden rounded-3xl border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-sunrise/10 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 sm:p-8 md:grid-cols-[1.2fr_1fr] md:items-center dark:border-brand-500/20 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5 dark:hover:border-brand-500/40"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-wide text-brand-800 shadow-sm ring-1 ring-brand-200/60 dark:bg-white/10 dark:text-brand-300 dark:ring-white/10">
          {f.status} · {f.subtitle}
        </span>

        <h3 className="mt-4 flex items-center gap-2 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
          {f.title}
          <ArrowUpRightIcon className="size-5 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-500" />
        </h3>

        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {f.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {f.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-brand-800 shadow-sm dark:bg-white/10 dark:text-brand-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="space-y-2.5">
          {f.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunrise to-brand-500" />
              {point}
            </li>
          ))}
        </ul>

        {f.cta ? (
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sunrise to-brand-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition group-hover:brightness-110">
            {f.cta}
            <ArrowUpRightIcon className="size-4" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}

function Body({ project }: { project: Project }) {
  return (
    <>
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
    </>
  );
}
