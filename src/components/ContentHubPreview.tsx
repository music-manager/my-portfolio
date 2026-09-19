import { contentHub } from "@/data/content-hub";

/**
 * 콘텐츠 허브 화면 미리보기.
 *
 * 아직 개발 중인 도구의 화면을 보여 주기 위한 정적 화면입니다.
 * 눌러서 동작하는 요소는 없으며, 숫자와 글 목록은 전부 예시입니다.
 * 사이트의 밝은/어두운 모드와 무관하게 앱 화면처럼 항상 어둡게 둡니다.
 */
export default function ContentHubPreview() {
  const p = contentHub.preview;

  return (
    <div
      className="overflow-hidden rounded-2xl bg-[#0b1220] ring-1 ring-white/10"
      aria-label="콘텐츠 허브 화면 미리보기"
    >
      {/* 상단 바 */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sky-400 text-lg"
            aria-hidden
          >
            ✨
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] text-slate-400">{p.owner}</span>
            <span className="block text-base font-bold text-white">
              {p.appName}
            </span>
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-400/40 px-3 py-1.5 text-[11px] font-semibold text-emerald-300">
          {p.mode}
        </span>
      </div>

      <div className="grid gap-4 p-4 lg:grid-cols-[13rem_1fr]">
        {/* 왼쪽 메뉴 */}
        <div className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5">
          <ul className="space-y-1">
            {p.menu.map((item, index) => (
              <li
                key={item}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  index === 0
                    ? "bg-sky-400/15 font-semibold text-sky-300"
                    : "text-slate-400"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="text-[11px] font-semibold tracking-wide text-slate-500">
              {p.principleTitle}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              {p.principle}
            </p>
          </div>
        </div>

        <div className="grid min-w-0 gap-4">
          {/* 숫자 카드 3개 */}
          <ul className="grid gap-3 sm:grid-cols-3">
            {p.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10"
              >
                <p className="text-xs text-slate-400">{stat.label}</p>
                <p className="mt-1.5 text-2xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{stat.note}</p>
              </li>
            ))}
          </ul>

          {/* 새 주제 입력 */}
          <div className="rounded-xl bg-sky-400/[0.06] p-4 ring-1 ring-sky-400/20">
            <p className="text-xs font-semibold text-slate-300">
              {p.composer.label}
            </p>
            <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
              <p className="flex-1 rounded-lg bg-[#0b1220] px-4 py-3 text-sm text-slate-500 ring-1 ring-white/10">
                {p.composer.placeholder}
              </p>
              <p className="shrink-0 rounded-lg bg-sky-400 px-5 py-3 text-center text-sm font-bold text-slate-950">
                + {p.composer.button}
              </p>
            </div>
            <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
              {p.composer.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-2 text-[11px] text-slate-400"
                >
                  {index > 0 ? (
                    <span className="text-slate-600" aria-hidden>
                      ›
                    </span>
                  ) : null}
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {/* 검수함 */}
            <div className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {p.inbox.heading}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {p.inbox.description}
                  </p>
                </div>
                <p className="rounded-lg bg-[#0b1220] px-3 py-2 text-[11px] text-slate-500 ring-1 ring-white/10">
                  {p.inbox.searchPlaceholder}
                </p>
              </div>

              <ul className="mt-4 space-y-2">
                {p.inbox.items.map((item) => (
                  <li
                    key={item.title}
                    className={`rounded-lg p-3 ${
                      item.active ? "bg-white/[0.07]" : "bg-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${stateTone(
                          item.state,
                        )}`}
                      >
                        {item.state}
                      </span>
                      <span className="shrink-0 text-[10px] text-slate-400">
                        품질 {item.score}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {item.meta}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 상세 */}
            <div className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${stateTone(
                    p.detail.state,
                  )}`}
                >
                  {p.detail.state}
                </span>
                <span className="shrink-0 rounded-full bg-sky-400/15 px-2.5 py-1 text-[10px] font-bold text-sky-300">
                  {p.detail.scoreLabel} {p.detail.score}
                </span>
              </div>

              <h3 className="mt-3 text-base font-bold text-white">
                {p.detail.title}
              </h3>

              <div className="mt-4 rounded-lg bg-amber-400/[0.08] p-3 ring-1 ring-amber-400/25">
                <p className="text-xs font-bold text-amber-300">
                  {p.detail.checkTitle}
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                  {p.detail.checkBody}
                </p>
              </div>

              <p className="mt-4 text-xs font-bold text-white">
                {p.detail.channelsHeading}
              </p>
              <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {p.detail.channels.map((channel) => (
                  <li
                    key={channel}
                    className="flex items-center justify-between gap-2 rounded-lg bg-[#0b1220] px-3 py-2.5 ring-1 ring-white/10"
                  >
                    <span className="text-xs text-slate-200">{channel}</span>
                    <span className="text-[10px] font-semibold text-sky-300">
                      {p.detail.channelAction}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] font-semibold text-slate-400">
                {p.detail.outlineHeading}
              </p>
              <ol className="mt-2 space-y-1.5">
                {p.detail.outline.map((line, index) => (
                  <li
                    key={line}
                    className="flex gap-2 text-[11px] leading-relaxed text-slate-300"
                  >
                    <span className="shrink-0 text-slate-500">
                      {index + 1}.
                    </span>
                    {line}
                  </li>
                ))}
              </ol>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <p className="rounded-lg px-4 py-2.5 text-center text-xs font-semibold text-slate-200 ring-1 ring-white/15">
                  {p.detail.actions.secondary}
                </p>
                <p className="rounded-lg bg-emerald-400 px-4 py-2.5 text-center text-xs font-bold text-slate-950">
                  {p.detail.actions.primary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 상태 배지 색상 */
function stateTone(state: string) {
  if (state === "승인완료") return "bg-emerald-400/15 text-emerald-300";
  if (state === "예약발행") return "bg-violet-400/15 text-violet-300";
  return "bg-amber-400/15 text-amber-300";
}
