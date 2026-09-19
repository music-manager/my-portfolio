"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * 다른 페이지로 넘어가면 화면 맨 위부터 보여 줍니다.
 *
 * globals.css 의 `scroll-behavior: smooth` 때문에 Next.js 가 스스로 하는
 * '맨 위로 이동'이 중간에 멈춥니다. 그래서 긴 페이지(홈)에서 짧은 페이지로
 * 넘어가면 아래쪽이 먼저 보였습니다. 여기서 한 번 더 맨 위로 보냅니다.
 *
 * 두 가지 경우는 건드리지 않습니다.
 * - 주소에 #이 붙어 있을 때: 그 위치로 가야 하므로 그대로 둡니다.
 * - 뒤로 가기로 돌아왔을 때: 보던 위치를 그대로 유지해야 합니다.
 */
export default function ScrollReset() {
  const pathname = usePathname();
  const cameFromHistory = useRef(false);

  useEffect(() => {
    const mark = () => {
      cameFromHistory.current = true;
    };
    window.addEventListener("popstate", mark);
    return () => window.removeEventListener("popstate", mark);
  }, []);

  useEffect(() => {
    if (cameFromHistory.current) {
      cameFromHistory.current = false;
      return;
    }
    if (window.location.hash) return;

    // smooth 가 걸려 있어도 즉시 움직이도록 잠시 꺼 둡니다.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
