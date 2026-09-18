"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon, SpotifyIcon } from "./Icons";

// 카드와 플레이어의 높이를 같게 두어 눌렀을 때 화면이 밀리지 않습니다
const HEIGHT = 152;

/**
 * 스포티파이 플레이어를 '누른 뒤에' 불러옵니다.
 *
 * 임베드를 처음부터 심어 두면 페이지를 열자마자 브라우저가
 * "보호된 미디어 ID를 사용하려고 합니다" 권한을 묻습니다.
 * 음악 섹션까지 내려오지도 않은 방문자에게는 뜬금없는 경고로 보입니다.
 *
 * 그래서 평소에는 앨범 커버가 있는 카드만 보여 주고, 재생을 누른
 * 사람에게만 실제 플레이어를 띄웁니다. 권한 요청도 그때 함께 나오므로
 * 맥락이 분명해지고, 첫 화면 로딩도 훨씬 가벼워집니다.
 */
export default function AlbumPlayer({
  id,
  title,
  cover,
}: {
  id: string;
  title: string;
  /** 앨범 커버 주소. 비어 있으면 글자만 있는 카드로 표시됩니다. */
  cover?: string;
}) {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/album/${id}?utm_source=generator`}
        title={`${title} — Spotify 플레이어`}
        width="100%"
        height={HEIGHT}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="block w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpened(true)}
      style={{ height: HEIGHT }}
      aria-label={`${title} 재생`}
      className="group flex w-full items-stretch gap-4 bg-gradient-to-br from-slate-900 to-slate-800 pr-5 text-left transition hover:from-slate-800 hover:to-slate-700 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15"
    >
      {/* 앨범 커버 — 스포티파이 임베드와 같은 정사각형 배치 */}
      <span
        className="relative block shrink-0 overflow-hidden bg-slate-800"
        style={{ width: HEIGHT, height: HEIGHT }}
      >
        {cover ? (
          <Image
            src={cover}
            alt={`${title} 앨범 커버`}
            fill
            sizes="152px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex size-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <SpotifyIcon className="size-10 text-white/20" />
          </span>
        )}

        {/* 커버 위에 올라가는 재생 버튼 */}
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition group-hover:opacity-100">
          <span className="flex size-12 items-center justify-center rounded-full bg-[#1db954] text-slate-950 shadow-lg">
            <PlayIcon className="size-5 translate-x-0.5" />
          </span>
        </span>
      </span>

      <span className="flex min-w-0 flex-1 flex-col justify-center py-4">
        <span className="line-clamp-2 text-base font-bold text-white">
          {title}
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <SpotifyIcon className="size-3.5 text-[#1db954]" />
          눌러서 재생
        </span>
      </span>

      {/* 커버가 작을 때도 재생 버튼이 보이도록 오른쪽에 하나 더 둡니다 */}
      <span className="flex items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#1db954] text-slate-950 shadow-lg transition group-hover:scale-105 sm:hidden">
          <PlayIcon className="size-5 translate-x-0.5" />
        </span>
      </span>
    </button>
  );
}
