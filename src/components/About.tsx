import { site } from "@/data/site";
import Section from "./Section";

export default function About() {
  const { about } = site;

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="무엇을 하는 사람인가요?"
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* 소개 + 관심사 */}
        <div>
          <div className="space-y-4">
            {about.paragraphs.map((text) => (
              <p
                key={text.slice(0, 20)}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {text}
              </p>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
            관심사
          </h3>
          <ul className="mt-4 space-y-2.5">
            {about.interests.map((interest) => (
              <li
                key={interest}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                {interest}
              </li>
            ))}
          </ul>
        </div>

        {/* 보유 기술 */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
            보유 기술
          </h3>
          <div className="mt-4 space-y-6">
            {about.skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-500">
                  {group.title}
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 경력 요약 */}
      <div className="mt-16">
        <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
          경력 요약
        </h3>
        <ol className="mt-6 border-l border-slate-200 dark:border-slate-800">
          {about.career.map((job) => (
            <li key={job.title} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-brand-500 ring-4 ring-slate-50 dark:ring-slate-900" />
              <p className="text-xs font-semibold tracking-wide text-brand-600 dark:text-brand-400">
                {job.period}
              </p>
              <p className="mt-1.5 text-base font-semibold text-slate-900 dark:text-white">
                {job.title}
                <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-500">
                  {job.org}
                </span>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
