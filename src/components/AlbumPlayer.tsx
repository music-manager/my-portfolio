"use client";

import Image from "next/image";
import { useState } from "react";
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
  cover,
  tracks = [],
}: {
  id: string;
  title: string;
  /** 앨범 커버 주소. 비어 있으면 스포티파이 아이콘으로 대체됩니다. */
  cover?: string;
  /** 수록곡 제목 목록. 비어 있으면 목록 없이 안내 문구만 표시됩니다. */
  tracks?: string[];
}) {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/album/${id}?utm_source=generator`}
        title={`${title} — Spotify 플레이어`}
        width="100%"
        height={PLAYER_HEIGHT}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="block w-full border-0"
      />
    );
  }

  const open = () => setOpened(true);

  return (
    <div className="group grid gap-5 bg-gradient-to-br from-slate-900 to-slate-800 p-5 transition hover:from-slate-800 sm:p-6 md:grid-cols-[14rem_1fr] md:gap-7 dark:from-white/10 dark:to-white/5">
      {/* 커버를 눌러도 재생됩니다 */}
      <button
        type="button"
        onClick={open}
        aria-label={`${title} 재생`}
        className="relative block aspect-square w-full overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10"
      >
        {cover ? (
          <Image
            src={cover}
            alt={`${title} 앨범 커버`}
            fill
            sizes="(min-width: 768px) 14rem, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex size-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <SpotifyIcon className="size-12 text-white/20" />
          </span>
        )}

        {/* 커버 위에 올라가는 재생 버튼 */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#1db954] text-slate-950 shadow-lg">
            <PlayIcon className="size-6 translate-x-0.5" />
          </span>
        </span>
      </button>

      <div className="flex min-w-0 flex-col">
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">
          {title}
        </h3>

        {tracks.length > 0 ? (
          <ol className="mt-4 grid gap-1.5 sm:grid-cols-2 md:gap-x-6">
            {tracks.map((track, index) => (
              <li
                key={track}
                className="flex items-baseline gap-2.5 text-sm text-slate-300"
              >
                <span className="w-4 shrink-0 text-right text-xs tabular-nums text-slate-500">
                  {index + 1}
                </span>
                <span className="min-w-0">{track}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-3 text-sm text-slate-400">
            스포티파이에서 바로 들어볼 수 있습니다.
          </p>
        )}

        <div className="mt-5 flex flex-1 items-end">
          <button
            type="button"
            onClick={open}
            className="inline-flex items-center gap-2 rounded-full bg-[#1db954] px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition hover:brightness-110"
          >
            <PlayIcon className="size-4 translate-x-0.5" />
            스포티파이에서 재생
          </button>
        </div>
      </div>
    </div>
  );
}
