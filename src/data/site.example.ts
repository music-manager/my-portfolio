// ============================================================
// 더미 데이터 예시 파일 (템플릿용)
//
// 새 사이트를 만들 때는 이 파일을 site.ts 로 복사한 뒤 내용만 바꾸세요.
//
//   cp src/data/site.example.ts src/data/site.ts
//
// site.ts 와 구조(키 이름)가 동일해야 합니다. site.ts 에 항목을
// 추가했다면 이 파일에도 같은 항목을 추가해 두세요.
// ============================================================

import type { ServiceAccent, StatAccent } from "./types";

export const site = {
  // ---------- 1. 기본 정보 (SEO / 브라우저 탭) ----------
  name: "홍길동",
  role: "웹 개발자 · 콘텐츠 크리에이터",
  siteUrl: "https://example.com", // 배포 후 실제 도메인으로 변경
  metaTitle: "홍길동 | 웹 개발자 · 콘텐츠 크리에이터",
  metaDescription:
    "웹 개발과 콘텐츠 제작을 함께 합니다. 포트폴리오와 운영 중인 채널을 소개합니다.",

  // ---------- 검색엔진 등록 (구글 / 네이버) ----------
  // 각 콘솔에서 발급받은 "인증 코드"만 따옴표 안에 붙여넣으면 됩니다.
  // content="여기부분만" 을 복사하세요. <meta ...> 태그 전체가 아닙니다.
  // 비워 두면 해당 인증 태그가 아예 출력되지 않습니다.
  verification: {
    // 구글 서치콘솔 > 소유권 확인 > HTML 태그
    google: "",
    // 네이버 서치어드바이저 > 사이트 소유확인 > HTML 태그
    naver: "",
  },

  // ---------- 로고 ----------
  // 워드마크 경로를 빈 값("")으로 두면 헤더에 사이트 이름이 텍스트로 표시됩니다.
  // 로고 이미지를 /public 에 넣고 아래 경로를 채우면 이미지로 바뀝니다.
  logo: {
    wordmarkLight: "", // 예: "/wordmark-light.png" (밝은 배경용, 검은 글자)
    wordmarkDark: "", // 예: "/wordmark-dark.png"  (어두운 배경용, 흰 글자)
    width: 593, // 워드마크 이미지의 실제 픽셀 가로 크기
    height: 96, // 워드마크 이미지의 실제 픽셀 세로 크기
    tagline: "WEB & CONTENT", // 헤더 이름 아래 한 줄. 비우면 숨겨집니다
    mark: "", // 예: "/emblem.png" (원형 엠블럼, 기본 아바타로 사용)
  },

  // 헤더 오른쪽 버튼
  headerCta: { label: "함께 일해요", href: "#contact" },

  // ---------- 2. 히어로 섹션 ----------
  hero: {
    badge: "WEB × CONTENT",
    // headline 은 기본 색, headlineAccent 는 그라데이션으로 표시됩니다
    headline: "필요한 것을 빠르게 만들고,",
    headlineAccent: "끝까지 운영합니다.",
    tagline:
      "웹사이트 제작부터 콘텐츠 운영까지, 작게 시작해 계속 굴러가는 구조를 만듭니다.",
    // 로고 옆 손글씨풍 문구 (빈 배열이면 숨겨짐)
    quote: ["작게 시작해서", "오래 굴러가는", "구조를 만듭니다."],
    // 히어로 좌·우 하단의 작은 영문 문구
    cornerLeft: ["BUILD TODAY", "GROW TOMORROW"],
    cornerRight: ["SMALL STEPS", "BIG RESULTS"],
    // 프로필 사진을 /public 에 넣고 "/profile.jpg" 처럼 적으세요.
    // 비어 있으면 logo.mark 를, 그것도 비어 있으면 이름 첫 글자를 보여 줍니다.
    avatar: "",
    primaryCta: { label: "작업물 보기", href: "#portfolio" },
    secondaryCta: { label: "연락하기", href: "#contact" },
  },

  // ---------- 3. About Me ----------
  about: {
    // 소개 제목 — headingAccent 는 그라데이션으로 표시됩니다
    heading: "필요한 화면을 끝까지 만드는",
    headingAccent: "웹 개발자, 홍길동",

    // 숫자 카드. accent: "sunrise" | "sky" | "rose"
    // 빈 배열([])로 두면 카드가 표시되지 않습니다.
    stats: [
      { value: "30+", label: "제작 사이트", accent: "sunrise" as StatAccent },
      { value: "5년", label: "개발 경력", accent: "sky" as StatAccent },
      { value: "계속", label: "운영 중", accent: "rose" as StatAccent },
    ],

    paragraphs: [
      "사용자가 헤매지 않는 화면을 만드는 일을 합니다. 기획 단계에서 동선을 먼저 정리하고, 그 흐름대로 화면을 구현합니다.",
      "만든 뒤에 방치하지 않습니다. 유입과 이탈을 측정하고, 데이터에 맞춰 화면과 문구를 계속 고쳐 나갑니다.",
    ],
    skillGroups: [
      { title: "프론트엔드", skills: ["React", "Next.js", "TypeScript"] },
      { title: "스타일링", skills: ["Tailwind CSS", "CSS", "반응형 디자인"] },
      { title: "백엔드 · 인프라", skills: ["Node.js", "Vercel", "Supabase"] },
      { title: "그로스", skills: ["SEO", "GA4", "A/B 테스트"] },
    ],
    career: [
      {
        period: "2024 — 현재",
        title: "프리랜서 웹 개발",
        org: "개인 사업",
        description:
          "기업 홈페이지와 랜딩페이지를 기획부터 배포까지 단독으로 진행합니다.",
      },
      {
        period: "2022 — 2024",
        title: "프론트엔드 개발자",
        org: "스타트업",
        description: "서비스 화면 개발과 성능 개선을 담당했습니다.",
      },
      {
        period: "2020 — 2022",
        title: "웹 퍼블리셔",
        org: "에이전시",
        description: "다양한 업종의 반응형 웹사이트를 제작했습니다.",
      },
    ],
    interests: [
      "사용자 동선 설계",
      "웹 성능 최적화",
      "반복 업무 자동화",
      "검색 유입 구조 설계",
    ],
  },

  // ---------- 4. Channels (유튜브 채널) ----------
  // 빈 배열([])로 두면 섹션 전체가 표시되지 않습니다.
  channels: {
    heading: "운영 중인 유튜브 채널",
    description:
      "주제별로 채널을 나눠 운영합니다. 기획부터 업로드까지 직접 진행합니다.",
    items: [
      {
        name: "채널 이름 1",
        handle: "@yourchannel1",
        url: "https://www.youtube.com/@yourchannel1",
        tag: "정보",
        emoji: "📺",
        description:
          "채널을 한 줄로 소개하는 자리입니다. 어떤 시청자에게 무엇을 주는 채널인지 적어 주세요.",
      },
      {
        name: "채널 이름 2",
        handle: "@yourchannel2",
        url: "https://www.youtube.com/@yourchannel2",
        tag: "리뷰",
        emoji: "🎬",
        description:
          "두 번째 채널 소개입니다. 첫 번째 채널과 어떻게 다른지 적으면 좋습니다.",
      },
      {
        name: "채널 이름 3",
        handle: "@yourchannel3",
        url: "https://www.youtube.com/@yourchannel3",
        tag: "쇼핑",
        emoji: "🛍️",
        description:
          "세 번째 채널 소개입니다. 수익화 방식을 함께 적어 두면 신뢰가 올라갑니다.",
      },
    ],
  },

  // ---------- 5. Projects (운영 중인 사이트·도구) ----------
  projects: [
    {
      title: "블로그",
      description:
        "검색 유입을 목표로 운영하는 블로그입니다. 어떤 주제를 다루고 어떻게 수익화하는지 적어 주세요.",
      href: "https://example.com/blog",
      tags: ["블로그", "SEO"],
      status: "운영 중",
      emoji: "✍️",
    },
    {
      title: "커뮤니티",
      description:
        "방문자가 머무르며 활동하는 공간입니다. 규모나 활동 방식을 적으면 좋습니다.",
      href: "https://example.com/community",
      tags: ["커뮤니티"],
      status: "운영 중",
      emoji: "☕",
    },
    {
      title: "내부 제작 도구",
      description:
        "반복 작업을 줄이려고 직접 만든 도구입니다. 어떤 문제를 해결했는지 적어 주세요.",
      href: "https://github.com/yourname",
      tags: ["Python", "자동화"],
      status: "개발 중",
      emoji: "🛠️",
    },
  ],

  // ---------- 6. Services (의뢰 가능한 유료 서비스) ----------
  // accent: "naver" | "kmong" | "neutral" — 플랫폼 배지 색상
  // price / points / proofHref 는 비워 두면 해당 요소가 표시되지 않습니다.
  services: {
    heading: "의뢰할 수 있는 서비스",
    description: "아래 서비스는 각 플랫폼에서 바로 의뢰·결제할 수 있습니다.",
    items: [
      {
        platform: "플랫폼 이름",
        accent: "neutral" as ServiceAccent,
        title: "홈페이지 · 랜딩페이지 제작",
        description:
          "방문자가 빠르게 이해하고 문의까지 이어지도록 반응형 웹사이트를 기획·개발합니다.",
        points: ["PC·모바일 반응형 제작", "문의·상담 폼 구현", "웹 배포 지원"],
        price: "",
        href: "https://example.com/service-1",
        cta: "자세히 보기",
        proofLabel: "제작 포트폴리오 보기",
        proofHref: "#portfolio",
      },
      {
        platform: "플랫폼 이름",
        accent: "neutral" as ServiceAccent,
        title: "광고 이미지 제작",
        description: "제품 사진을 기반으로 광고·홍보용 이미지를 제작합니다.",
        points: [
          "쇼핑몰·SNS·배너 광고 맞춤 제작",
          "BASIC · 3장 · 00,000원",
          "PRO · 10장 · 00,000원",
        ],
        price: "00,000원부터",
        href: "https://example.com/service-2",
        cta: "자세히 보기",
        proofLabel: "",
        proofHref: "",
      },
    ],
  },

  // ---------- 7. Portfolio (제작 실적) ----------
  portfolio: {
    heading: "홈페이지 제작 포트폴리오",
    description:
      "의뢰를 받아 기획·제작한 사이트입니다. 카드를 누르면 실제 사이트로 이동합니다.",
    items: [
      {
        client: "클라이언트 A",
        type: "B2B 랜딩페이지",
        description:
          "어떤 목적의 사이트였고 무엇을 해결했는지 한두 문장으로 적어 주세요.",
        href: "https://example.com/work-1",
        tags: ["B2B", "랜딩페이지", "반응형"],
        thumbnail: "", // 예: "/portfolio/work-1.png" (16:9 첫 화면 캡처)
      },
      {
        client: "클라이언트 B",
        type: "기업 홈페이지",
        description: "회사 소개와 서비스 안내, 문의 동선을 구성했습니다.",
        href: "https://example.com/work-2",
        tags: ["기업 홈페이지", "반응형"],
        thumbnail: "", // 예: "/portfolio/work-1.png" (16:9 첫 화면 캡처)
      },
      {
        client: "클라이언트 C",
        type: "웹 플랫폼",
        description:
          "여러 기능을 한곳에서 쓸 수 있도록 만든 반응형 웹 플랫폼입니다.",
        href: "https://example.com/work-3",
        tags: ["웹 플랫폼", "반응형"],
        thumbnail: "", // 예: "/portfolio/work-1.png" (16:9 첫 화면 캡처)
      },
    ],
  },

  // ---------- 8. Music (Spotify 앨범) ----------
  // 앨범 ID는 스포티파이 링크의 /album/ 뒤에 오는 문자열입니다.
  // 예) { id: "2sDqPRdDouf4e3QkJCdASu", title: "앨범 1" }
  // 빈 배열([])이면 Music 섹션 전체가 표시되지 않습니다.
  music: {
    heading: "발매한 앨범",
    description:
      "스트리밍 플랫폼에 발매한 앨범입니다. 아래에서 바로 들어볼 수 있습니다.",
    artistUrl: "",
    albums: [] as { id: string; title: string; cover?: string }[],
  },

  // ---------- 9. Contact / Social ----------
  contact: {
    heading: "함께 만들 이야기가 있다면",
    description:
      "협업, 외주, 제작 문의 모두 환영합니다. 메일로 연락 주시면 빠르게 답장드립니다.",
    email: "hello@example.com",
  },

  // icon: "mail" | "github" | "blog" | "youtube" | "spotify" | "naver"
  socials: [
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
    { label: "GitHub", href: "https://github.com/yourname", icon: "github" },
    { label: "블로그", href: "https://example.com/blog", icon: "blog" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@yourchannel1",
      icon: "youtube",
    },
  ] as const,

  // ---------- 네비게이션 ----------
  // 내용이 비어 자동으로 숨겨지는 섹션(Music 등)은 여기서도 빼 주세요.
  nav: [
    { label: "About", href: "#about" },
    { label: "Channels", href: "#channels" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Site = typeof site;
export type Project = (typeof site.projects)[number];
export type Album = (typeof site.music.albums)[number];
export type Service = (typeof site.services.items)[number];
export type Channel = (typeof site.channels.items)[number];
export type PortfolioItem = (typeof site.portfolio.items)[number];
export type Stat = (typeof site.about.stats)[number];
