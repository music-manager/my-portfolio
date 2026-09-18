import { site } from "@/data/site";
import AlbumPlayer from "./AlbumPlayer";
import { ArrowUpRightIcon } from "./Icons";
import Section from "./Section";

/**
 * 앨범 커버를 스포티파이 oEmbed 에서 가져옵니다.
 *
 * 빌드할 때 한 번만 호출되므로 방문자 쪽 속도에는 영향이 없고,
 * 앨범을 추가해도 커버를 따로 준비할 필요가 없습니다.
 * 실패하면 null 을 돌려주고 카드가 글자만 있는 형태로 표시됩니다.
 * (site.ts 의 cover 에 직접 주소를 적으면 그 값이 우선합니다)
 */
async function fetchCover(id: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://open.spotify.com/oembed?url=https://open.spotify.com/album/${id}`,
      { cache: "force-cache", signal: AbortSignal.timeout(8000) },
    );
    if (!res.ok) return null;
    const data: unknown = await res.json();
    const url =
      typeof data === "object" && data !== null && "thumbnail_url" in data
        ? (data as { thumbnail_url?: unknown }).thumbnail_url
        : null;
    return typeof url === "string" && url.startsWith("https://i.scdn.co/")
      ? url
      : null;
  } catch {
    // 빌드 환경에서 스포티파이에 접근하지 못해도 빌드는 계속되어야 합니다
    return null;
  }
}

export default async function Music() {
  const { music } = site;

  if (music.albums.length === 0) return null;

  const albums = await Promise.all(
    music.albums.map(async (album) => ({
      ...album,
      cover: album.cover || (await fetchCover(album.id)) || "",
    })),
  );

  return (
    <Section
      id="music"
      eyebrow="Music"
      title={music.heading}
      description={music.description}
    >
      {/* 누른 뒤에 플레이어를 불러옵니다 (AlbumPlayer 주석 참고) */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {albums.map((album) => (
          <li
            key={album.id}
            className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-900/5 dark:bg-white/5 dark:ring-white/10"
          >
            <AlbumPlayer
              id={album.id}
              title={album.title}
              cover={album.cover}
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
