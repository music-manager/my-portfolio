"use client";

import { useState } from "react";
import { PlayIcon, SpotifyIcon } from "./Icons";

/**
 * 스포티파이 플레이어를 '누른 뒤에' 불러옵니다.
 *
 * 임베드를 처음부터 심어 두면 페이지를 열자마자 브라우저가
 * "보호된 미디어 ID를 사용하려고 합니다" 권한을 묻습니다.
 * 음악 섹션까지 내려오지도 않은 방문자에게는 뜬금없는 경고로 보입니다.
 *
 * 그래서 평소에는 가벼운 카드만 보여 주고, 재생을 누른 사람에게만
 * 실제 플레이어를 띄웁니다. 권한 요청도 그때 함께 나오므로
 * 맥락이 분명해지고, 첫 화면 로딩도 훨씬 가벼워집니다.
 */
export default function AlbumPlayer({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [opened, setOpened] = useState(false);

  // 카드와 플레이어의 높이를 같게 두어 눌렀을 때 화면이 밀리지 않습니다
  const HEIGHT = 152;

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
      aria-label={`${title} 플레이어 열기`}
      className="group flex w-full items-center gap-4 bg-gradient-to-br from-slate-900 to-slate-800 px-5 text-left transition hover:from-slate-800 hover:to-slate-700 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15"
    >
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#1db954] text-slate-950 shadow-lg transition group-hover:scale-105">
        <PlayIcon className="size-6 translate-x-0.5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-base font-bold text-white">
          {title}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-400">
          <SpotifyIcon className="size-3.5 text-[#1db954]" />
          눌러서 재생
        </span>
      </span>
    </button>
  );
}
