import { site } from "@/data/site";
import AlbumPlayer from "./AlbumPlayer";
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
    >
      {/* 누른 뒤에 플레이어를 불러옵니다 (AlbumPlayer 주석 참고) */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {music.albums.map((album) => (
          <li
            key={album.id}
            className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-900/5 dark:bg-white/5 dark:ring-white/10"
          >
            <AlbumPlayer id={album.id} title={album.title} />
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
