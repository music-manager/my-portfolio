import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/data/site";

/**
 * 이 주소로 지금 이동할 수 있는지 알려 줍니다.
 * site.linksPaused 가 true 이면 메일(mailto:) 링크만 살리고 전부 멈춥니다.
 */
export function isLinkActive(href: string) {
  return !site.linksPaused || href.startsWith("mailto:");
}

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  /** 링크가 멈췄을 때 대신 그릴 태그. 글자 안에 들어가는 링크는 "span" */
  as?: "div" | "span";
  /** 아이콘만 있는 링크의 이름 (화면 낭독기·마우스 툴팁용) */
  label?: string;
};

/**
 * 링크 정지 스위치를 따르는 링크.
 * - 멈춤: 같은 모양 그대로, 눌러도 아무 데도 가지 않습니다 (href 자체를 넣지 않음)
 * - "/" 로 시작: 사이트 안 이동
 * - "http" 로 시작: 새 창
 */
export default function PausableLink({
  href,
  className = "",
  children,
  as: Tag = "div",
  label,
}: Props) {
  if (!isLinkActive(href)) {
    return (
      <Tag className={`${className} cursor-default`} title={label}>
        {children}
      </Tag>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} aria-label={label} title={label}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={className}
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}
