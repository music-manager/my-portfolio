import { site } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

export default function Music() {
  const { music } = site;

  if (music.albums.length === 0) return null;

  return (
    <Section
      id="music"
      eyebrow="Music"
      title={music.heading}
      description={music.description}
      className="bg-slate-50/70 dark:bg-slate-900/40"
    >
      {/* 스포티파이 공식 임베드 — 앨범명·커버·재생 버튼이 항상 최신 상태로 표시됩니다 */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {music.albums.map((album) => (
          <li
            key={album.id}
            className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900"
          >
            <iframe
              src={`https://open.spotify.com/embed/album/${album.id}?utm_source=generator`}
              title={`${album.title} — Spotify 플레이어`}
              width="100%"
              height={152}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block w-full border-0"
            />
          </li>
        ))}
      </ul>

      {music.artistUrl ? (
        <div className="mt-8">
          <a
            href={music.artistUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            스포티파이에서 전체 앨범 보기
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      ) : null}
    </Section>
  );
}
