"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayIcon, SpotifyIcon } from "./Icons";

// 눌렀을 때 뜨는 스포티파이 플레이어의 높이.
// 이 높이여야 플레이어 안에서도 수록곡 목록이 함께 보입니다.
const PLAYER_HEIGHT = 352;

/**
 * 스포티파이 플레이어를 '누른 뒤에' 불러옵니다.
 *
 * 임베드를 처음부터 심어 두면 페이지를 열자마자 브라우저가
 * "보호된 미디어 ID를 사용하려고 합니다" 권한을 묻습니다.
 * 음악 섹션까지 내려오지도 않은 방문자에게는 뜬금없는 경고로 보입니다.
 *
 * 그래서 평소에는 앨범 커버와 수록곡만 보여 주고, 재생을 누른
 * 사람에게만 실제 플레이어를 띄웁니다. 권한 요청도 그때 함께 나오므로
 * 맥락이 분명해지고, 첫 화면 로딩도 훨씬 가벼워집니다.
 *
 * 수록곡을 글자로 함께 적어 두면 검색엔진이 곡 제목까지 읽어 갑니다.
 */
export default function AlbumPlayer({
  id,
  title,
  artist,
  cover,
  tracks = [],
}: {
  id: string;
  title: string;
  /** 제목 옆에 표시할 아티스트 이름. 비어 있으면 표시되지 않습니다. */
  artist?: string;
  /** 앨범 커버 주소. 비어 있으면 스포티파이 아이콘으로 대체됩니다. */
  cover?: string;
  /** 수록곡 제목 목록. 비어 있으면 목록 없이 안내 문구만 표시됩니다. */
  tracks?: string[];
}) {
  const [opened, setOpened] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // 카드가 플레이어로 바뀌면 높이가 줄어들어, 보고 있던 앨범 자리에
  // 아래쪽 앨범이 올라옵니다. 방금 연 플레이어를 화면 가운데로
  // 옮겨 주어 누른 앨범을 계속 보고 있게 합니다.
  useEffect(() => {
    if (!opened) return;
    boxRef.current?.scrollIntoView({ block: "center" });
  }, [opened]);

  const open = () => setOpened(true);

  return (
    <div ref={boxRef}>
      {opened ? (
        <iframe
          src={`https://open.spotify.com/embed/album/${id}?utm_source=generator`}
          title={`${title} — Spotify 플레이어`}
          width="100%"
          height={PLAYER_HEIGHT}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="block w-full border-0"
        />
      ) : (
        /* 모바일은 커버와 제목을 한 줄에 두어 카드를 낮게 만듭니다.
           PC(md 이상)는 커버가 왼쪽 칸 전체를 차지합니다. */
        <div className="group grid grid-cols-[8rem_1fr] gap-x-4 gap-y-4 bg-gradient-to-br from-slate-900 to-slate-800 p-5 transition hover:from-slate-800 sm:grid-cols-[10rem_1fr] sm:p-6 md:grid-cols-[14rem_1fr] md:gap-x-7 dark:from-white/10 dark:to-white/5">
          {/* 커버를 눌러도 재생됩니다 */}
          <button
            type="button"
            onClick={open}
            aria-label={`${title} 재생`}
            className="relative block aspect-square w-full self-start overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10 md:row-span-2"
          >
            {cover ? (
              <Image
                src={cover}
                alt={`${title} 앨범 커버`}
                fill
                sizes="(min-width: 768px) 14rem, (min-width: 640px) 10rem, 8rem"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="flex size-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                <SpotifyIcon className="size-10 text-white/20" />
              </span>
            )}

            {/* 커버 위에 올라가는 재생 버튼 */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#1db954] text-slate-950 shadow-lg">
                <PlayIcon className="size-5 translate-x-0.5" />
              </span>
            </span>
          </button>

          <h3 className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 self-center text-lg font-extrabold text-white sm:text-xl md:self-start md:text-2xl">
            <span>{title}</span>
            {artist ? (
              <span className="text-sm font-semibold text-slate-400">
                · {artist}
              </span>
            ) : null}
          </h3>

          {/* 수록곡과 재생 버튼은 모바일에서 아래 줄 전체를 씁니다 */}
          <div className="col-span-2 min-w-0 md:col-span-1 md:col-start-2">
            {tracks.length > 0 ? (
              <ol className="grid gap-3 sm:grid-cols-2 md:gap-x-6">
                {tracks.map((track, index) => (
                  <li key={track} className="flex gap-2.5">
                    <span className="w-4 shrink-0 text-right text-xs leading-5 tabular-nums text-slate-500">
                      {index + 1}
                    </span>
                    {/* 스포티파이처럼 곡 제목 아래에 아티스트를 적습니다 */}
                    <span className="min-w-0">
                      <span className="block text-sm leading-5 text-slate-300">
                        {track}
                      </span>
                      {artist ? (
                        <span className="mt-0.5 block text-xs leading-4 text-slate-500">
                          {artist}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-slate-400">
                스포티파이에서 바로 들어볼 수 있습니다.
              </p>
            )}

            <button
              type="button"
              onClick={open}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1db954] px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition hover:brightness-110"
            >
              <PlayIcon className="size-4 translate-x-0.5" />
              스포티파이에서 재생
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
