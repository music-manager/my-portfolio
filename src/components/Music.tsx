import { site } from "@/data/site";
import AlbumPlayer from "./AlbumPlayer";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

/**
 * 발매 앨범 섹션.
 *
 * 커버 이미지는 site.ts 의 cover 값(예: "/albums/season-end.jpg")을 그대로 씁니다.
 * public/albums 안에 640x640 정사각형 이미지를 넣고 경로만 적어주면 됩니다.
 * cover 를 빈 문자열로 두면 스포티파이 아이콘 카드가 대신 표시됩니다.
 */
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
      {/* 포트폴리오와 같이 한 줄에 하나씩 놓고 수록곡을 옆에 보여 줍니다.
          누른 뒤에 플레이어를 불러옵니다 (AlbumPlayer 주석 참고) */}
      <ul className="grid gap-5">
        {music.albums.map((album) => (
          <li
            key={album.id}
            className="overflow-hidden rounded-2xl ring-1 ring-slate-900/5 dark:ring-white/10"
          >
            <AlbumPlayer
              id={album.id}
              title={album.title}
              artist={music.artist}
              cover={album.cover}
              tracks={album.tracks}
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
