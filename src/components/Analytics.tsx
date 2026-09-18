"use client";

import Script from "next/script";
import { useEffect } from "react";

// 측정 ID는 환경변수로만 받습니다. 값이 없으면 스크립트를 아예 로드하지 않으므로
// 로컬 개발 중에는 통계가 오염되지 않습니다.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 파라미터 값 길이 제한(100자)에 맞춰 자릅니다 */
function trim(value: string, max = 100) {
  const clean = value.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}

export default function Analytics() {
  // 외부 링크 클릭을 한 곳에서 위임 처리합니다.
  // 각 컴포넌트에 onClick 을 달지 않아도 되고, 링크가 늘어나도 수정할 필요가 없습니다.
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // 페이지 내 앵커 이동(#about 등)은 집계하지 않습니다
      const isMail = href.startsWith("mailto:");
      const isExternal =
        href.startsWith("http") && !href.includes(window.location.host);
      if (!isMail && !isExternal) return;

      // 카드 전체가 링크인 경우 textContent 는 카드 내용을 전부 긁어옵니다.
      // 제목 → aria-label → 본문 순으로 의미 있는 라벨을 고릅니다.
      const label =
        link.querySelector("h1,h2,h3,h4")?.textContent ||
        link.getAttribute("aria-label") ||
        link.textContent ||
        "";

      window.gtag?.("event", "outbound_click", {
        link_url: trim(href),
        link_text: trim(label),
        // 어느 섹션에서 클릭했는지 — Channels / Services / Portfolio ...
        section: link.closest("section")?.id || "unknown",
      });
    };

    // 캡처 단계에서 듣습니다. 새 탭으로 열리는 링크도 놓치지 않습니다.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
