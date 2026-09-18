import { site } from "@/data/site";
import { ChartIcon, HeartIcon, PlayIcon } from "./Icons";
import Section from "./Section";

// 숫자 카드의 색상 조합
const statTones = {
  sunrise: {
    chip: "bg-orange-50 dark:bg-orange-500/10",
    icon: "text-orange-500",
    glyph: <PlayIcon className="size-5" />,
  },
  sky: {
    chip: "bg-sky-50 dark:bg-sky-500/10",
    icon: "text-sky-500",
    glyph: <ChartIcon className="size-5" />,
  },
  rose: {
    chip: "bg-rose-50 dark:bg-rose-500/10",
    icon: "text-rose-500",
    glyph: <HeartIcon className="size-5" />,
  },
} as const;

export default function About() {
  const { about } = site;

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={about.heading}
      titleAccent={about.headingAccent}
      className="bg-slate-50/70 dark:bg-white/[0.03]"
    >
      {/* 숫자 카드 */}
      {about.stats.length > 0 ? (
        <ul className="mb-14 grid gap-4 sm:grid-cols-3">
          {about.stats.map((stat) => {
            const tone = statTones[stat.accent];
            return (
              <li
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tone.chip}`}
                >
                  <span className={`size-5 ${tone.icon}`}>{tone.glyph}</span>
                </span>
                <span className="min-w-0">
                  <span className="block text-xl font-extrabold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}

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
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-sunrise to-brand-500" />
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
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10"
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
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-gradient-to-br from-sunrise to-brand-500 ring-4 ring-slate-50 dark:ring-[#111]" />
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
