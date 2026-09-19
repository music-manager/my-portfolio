// ============================================================
// 이 파일만 수정하면 사이트 전체 내용이 바뀝니다.
// (이미지, 이름, 링크, 프로젝트 카드 전부 여기서 관리)
// ============================================================

import type { ServiceAccent, StatAccent } from "./types";

export const site = {
  // ---------- 기본 정보 (SEO / 브라우저 탭) ----------
  name: "CHANGHO",
  role: "AI 콘텐츠 자동화 크리에이터",
  siteUrl: "https://changho.esedy.com", // 배포 도메인
  metaTitle: "CHANGHO | AI 콘텐츠 자동화 크리에이터",
  metaDescription:
    "AI로 영상·음악·블로그 콘텐츠를 자동으로 만들고 유통합니다. 포트폴리오와 운영 중인 채널을 소개합니다.",

  // ---------- 검색엔진 등록 (구글 / 네이버) ----------
  // 각 콘솔에서 발급받은 "인증 코드"만 따옴표 안에 붙여넣으면 됩니다.
  // content="여기부분만" 을 복사하세요. <meta ...> 태그 전체가 아닙니다.
  // 비워 두면 해당 인증 태그가 아예 출력되지 않습니다.
  verification: {
    // 구글 서치콘솔 > 소유권 확인 > HTML 태그
    // changho.esedy.com 은 DNS(도메인 공급업체)로 자동 확인되어 비워 둡니다.
    google: "",
    // 네이버 서치어드바이저 > 사이트 소유확인 > HTML 태그
    naver: "22b127239abd8b59ac0c57ea2ea441127a6857f4",
  },

  // ---------- 로고 ----------
  // 로고 이미지는 /public 에 있습니다. 교체하려면 같은 이름으로 덮어쓰고
  // width/height(원본 픽셀 크기)만 맞춰 주세요.
  logo: {
    // 헤더 워드마크 이미지. 비워 두면 사이트 이름이 텍스트로 표시됩니다.
    wordmarkLight: "",
    wordmarkDark: "",
    width: 593,
    height: 96,
    // 헤더 이름 아래에 붙는 한 줄
    tagline: "MUSIC & AI CREATOR",
    // 원형 엠블럼 — 히어로 아바타와 파비콘에 사용
    mark: "/emblem.png",
  },

  // 헤더 오른쪽 버튼
  headerCta: { label: "함께 만드는 더 좋은 하루", href: "#contact" },

  // ---------- 1. 히어로 섹션 ----------
  hero: {
    badge: "AI × MUSIC × CONTENT",
    // headline 은 검은 글자, headlineAccent 는 골드 그라데이션으로 표시됩니다
    headline: "AI로 콘텐츠를 자동으로 만들고,",
    headlineAccent: "유통하고, 수익화합니다.",
    tagline:
      "유튜브 쇼츠·AI 음악·블로그·홈페이지 제작까지, 기획부터 발행까지 전 과정을 자동화하는 시스템을 만듭니다.",
    // 로고 옆에 손글씨처럼 들어가는 문구 (줄바꿈은 배열로)
    quote: ["좋은 콘텐츠가", "좋은 사람들을", "더 가깝게 만듭니다."],
    // 히어로 좌·우 하단의 작은 영문 문구
    cornerLeft: ["CREATIVE TODAY", "A BRIGHTER TOMORROW"],
    cornerRight: ["AI MAKES", "IDEAS REAL"],
    // /public 폴더에 사진을 넣고 "/profile.jpg" 처럼 적으면 사진이 표시됩니다.
    // 빈 값("")이면 로고 심볼 마크(logo.mark)가 대신 표시됩니다.
    avatar: "",
    primaryCta: { label: "채널 보기", href: "#channels" },
    secondaryCta: { label: "연락하기", href: "#contact" },
  },

  // ---------- 2. About Me ----------
  about: {
    // 소개 제목 — accent 는 골드 그라데이션으로 표시됩니다
    heading: "아이디어를 현실로 만드는",
    headingAccent: "AI 콘텐츠 크리에이터, CHANGHO",

    // 숫자 카드. accent: "sunrise" | "sky" | "rose"
    // ⚠️ 아래 수치는 시안 기준 예시입니다. 실제 값으로 바꿔 주세요.
    stats: [
      { value: "100+", label: "제작 콘텐츠", accent: "sunrise" as StatAccent },
      { value: "10+", label: "운영 채널", accent: "sky" as StatAccent },
      { value: "계속", label: "더 좋은 콘텐츠", accent: "rose" as StatAccent },
    ],

    paragraphs: [
      "AI 도구를 조합해 콘텐츠 제작 파이프라인을 만드는 일을 합니다. 기획·대본·영상·자막·썸네일까지 사람이 손대는 단계를 최소화하는 구조를 설계합니다.",
      "제작한 콘텐츠는 유튜브와 스트리밍 플랫폼, 블로그로 동시에 유통하며, 각 채널의 데이터를 보고 다음 콘텐츠를 자동으로 기획하는 루프를 운영합니다.",
    ],
    // 보유 기술 — 원하는 만큼 추가/삭제하세요.
    skillGroups: [
      {
        title: "콘텐츠 자동화",
        skills: ["ffmpeg", "Whisper", "CapCut", "Python", "n8n"],
      },
      {
        title: "AI 제작",
        skills: ["Suno AI", "Midjourney", "ChatGPT API", "Claude API"],
      },
      {
        title: "웹 / 개발",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      },
      {
        title: "유통 / 마케팅",
        skills: ["YouTube SEO", "DistroKid", "블로그 SEO", "제휴 마케팅"],
      },
    ],
    // 경력 요약 — 최신 순으로 적으세요.
    career: [
      {
        period: "2024 — 현재",
        title: "AI 콘텐츠 스튜디오 운영",
        org: "1인 사업",
        description:
          "유튜브 쇼츠·롱폼 채널과 AI 음악 레이블을 동시 운영. 기획부터 업로드까지 자동화 파이프라인으로 제작합니다.",
      },
      {
        period: "2022 — 2024",
        title: "콘텐츠 마케터",
        org: "프리랜서",
        description:
          "브랜드 블로그 SEO와 제휴 마케팅을 담당. 검색 유입 기반 수익화 구조를 설계·운영.",
      },
      {
        period: "2020 — 2022",
        title: "웹 프론트엔드 개발",
        org: "스타트업",
        description:
          "React 기반 서비스 화면 개발 및 반응형 랜딩 페이지 제작.",
      },
    ],
    // 관심사
    interests: [
      "AI 음악 제작과 글로벌 유통",
      "쇼츠 알고리즘과 후킹 구조 분석",
      "노코드 · 코드 기반 업무 자동화",
      "SEO 기반 트래픽 설계",
    ],
  },

  // ---------- 3. Channels (유튜브 채널) ----------
  // 채널을 추가하려면 아래 배열에 한 줄 추가하면 됩니다.
  channels: {
    heading: "운영 중인 유튜브 채널",
    description:
      "주제별로 채널을 나눠 운영합니다. 기획부터 대본·영상·자막·업로드까지 자동화 파이프라인으로 제작합니다.",
    // avatar: public/channels 안의 정사각형 프로필 사진 경로입니다.
    // 비워 두면 emoji 값이 대신 표시됩니다.
    items: [
      {
        name: "동물쉐프",
        handle: "@dongmulchef",
        url: "https://www.youtube.com/@dongmulchef",
        tag: "요리",
        emoji: "🍳",
        avatar: "/channels/dongmulchef.jpg",
        description:
          "강아지를 위한 음식을 만들고 먹는 과정을 담은 요리·먹방 쇼츠 채널입니다.",
      },
      {
        name: "핑키미용실",
        handle: "@핑키미용실",
        url: "https://www.youtube.com/@핑키미용실",
        tag: "미용",
        emoji: "✂️",
        avatar: "/channels/pinky-salon.jpg",
        description:
          "강아지 미용 전후 변신 과정을 보여 주는 Before/After 중심 쇼츠 채널입니다.",
      },
      {
        name: "핑키 감동극장",
        handle: "@핑키감동극장",
        url: "https://www.youtube.com/@핑키감동극장",
        tag: "감동",
        emoji: "🐶",
        avatar: "/channels/pinky-theater.jpg",
        description:
          "토이푸들 핑키가 위기에 빠진 동물을 구조하는 감동 스토리 쇼츠를 매일 발행합니다.",
      },
      {
        name: "창호",
        handle: "@changhomusic",
        url: "https://www.youtube.com/@changhomusic",
        tag: "음악",
        emoji: "🎼",
        avatar: "/channels/changho.jpg",
        description:
          "직접 제작한 AI 음악을 공개하는 메인 음악 채널입니다. 스트리밍 플랫폼 발매곡과 연결됩니다.",
      },
      {
        name: "ELIRA",
        handle: "@eliramusic",
        url: "https://www.youtube.com/@eliramusic",
        tag: "음악",
        emoji: "🎧",
        avatar: "/channels/elira.jpg",
        description:
          "별도 콘셉트로 운영하는 세컨드 음악 채널입니다. 장르와 분위기를 나눠 청취층을 넓힙니다.",
      },
      {
        name: "꿀템모음",
        handle: "@gooditemhub",
        url: "https://www.youtube.com/@gooditemhub",
        tag: "쇼핑",
        emoji: "🛍️",
        avatar: "/channels/gooditemhub.jpg",
        description:
          "생활에 도움이 되는 제품을 소개하는 쇼핑 큐레이션 채널입니다. 제휴 링크로 수익화합니다.",
      },
    ],
  },

  // ---------- 4. Projects (운영 중인 사이트·도구) ----------
  // 운영 중인 사이트 / 채널 / 서비스를 카드로 보여줍니다.
  projects: [
    {
      title: "네이버 블로그 · 지출추적자",
      description:
        "생활비 절약과 지출 관리를 다루는 검색 유입 중심 블로그입니다. SEO 최적화 글을 발행하고 제휴 링크로 수익화합니다.",
      href: "https://blog.naver.com/ktntopia",
      tags: ["네이버 블로그", "SEO", "제휴 마케팅"],
      status: "운영 중",
      emoji: "✍️",
    },
    {
      title: "네이버 카페 · 지출추적자",
      description:
        "지출 관리 노하우를 나누는 커뮤니티입니다. 블로그에서 유입된 방문자가 머무르며 활동하는 공간으로 운영합니다.",
      href: "https://cafe.naver.com/smartcs",
      tags: ["네이버 카페", "커뮤니티"],
      status: "운영 중",
      emoji: "☕",
    },
    {
      title: "티스토리 블로그",
      description:
        "검색 유입을 노리는 두 번째 블로그입니다. 네이버 블로그와 주제를 나눠 구글·다음 검색 채널을 함께 확보합니다.",
      href: "https://ktntopia.tistory.com",
      tags: ["티스토리", "구글 SEO"],
      status: "운영 중",
      emoji: "📝",
    },
    {
      title: "콘텐츠 자동화 툴킷",
      description:
        "ffmpeg와 Whisper를 조합해 자막·나레이션·BGM을 자동 합성하는 내부 제작 도구입니다.",
      href: "https://github.com/lifetools-dev",
      tags: ["Python", "ffmpeg", "Whisper"],
      status: "개발 중",
      emoji: "🛠️",
    },
  ],

  // ---------- 5. Services (의뢰 가능한 유료 서비스) ----------
  // accent: "naver" | "kmong" | "neutral" — 플랫폼 배지 색상
  // price / points / proofHref 는 비워 두면 해당 요소가 표시되지 않습니다.
  services: {
    heading: "의뢰할 수 있는 서비스",
    description:
      "크몽에서 'AI콘텐츠마케팅랩' 으로, 네이버 엑스퍼트에서 '지출추적자' 로 활동하고 있습니다. 아래 서비스는 각 플랫폼에서 바로 의뢰·결제할 수 있습니다.",
    items: [
      {
        platform: "크몽",
        accent: "kmong" as ServiceAccent,
        title: "기업 홈페이지 · 랜딩페이지 제작",
        description:
          "방문자가 회사를 빠르게 이해하고 문의까지 이어지도록 반응형 기업 홈페이지와 랜딩페이지를 기획·개발합니다.",
        points: [
          "PC·모바일 반응형 제작",
          "문의·상담 폼 및 화면 인터랙션 구현",
          "회사소개서·브로슈어 기반 웹사이트 재구성",
          "웹 배포 지원",
        ],
        price: "149,000원부터",
        href: "https://kmong.com/gig/815010",
        cta: "크몽에서 보기",
        proofLabel: "제작 포트폴리오 보기",
        proofHref: "#portfolio",
      },
      {
        platform: "크몽",
        accent: "kmong" as ServiceAccent,
        title: "AI 제품 광고 이미지 제작",
        description:
          "제품 사진을 기반으로 미드저니를 활용해 광고·홍보용 연출 이미지를 제작합니다.",
        points: [
          "쇼핑몰·스마트스토어·SNS·배너 광고 맞춤 제작",
          "STANDARD · 3장 · 29,000원",
          "DELUXE · 6장 · 59,000원",
          "PREMIUM · 10장 · 99,000원",
        ],
        price: "29,000원부터",
        href: "https://kmong.com/gig/814481",
        cta: "크몽에서 보기",
        proofLabel: "",
        proofHref: "",
      },
      {
        platform: "네이버 엑스퍼트",
        accent: "naver" as ServiceAccent,
        title: "1:1 지출 관리 상담",
        description:
          "지출 관리와 절약 전략을 개인 상황에 맞춰 상담해 드립니다. 네이버 엑스퍼트에서 바로 신청할 수 있습니다.",
        points: [],
        price: "",
        href: "https://m.expert.naver.com/mobile/expert/product/detail?storeId=100060593&productId=100186801",
        cta: "상담 신청하기",
        proofLabel: "지식iN 활동 내역 보기",
        proofHref:
          "https://kin.naver.com/profile/index.naver?u=7aLa%2FWjmjZFtTWX1Yr4v56TwQ%2BvSNP3v6Ue0A26%2FkaM%3D",
      },
    ],
  },

  // ---------- 6. Portfolio (홈페이지 제작 실적) ----------
  // 의뢰받아 제작한 클라이언트 사이트입니다.
  // Projects(직접 운영하는 사이트)와 구분됩니다.
  portfolio: {
    heading: "홈페이지 제작 포트폴리오",
    description:
      "의뢰를 받아 기획·제작한 사이트입니다. 모두 PC·모바일 반응형으로 제작했으며, 카드를 누르면 실제 사이트로 이동합니다.",
    items: [
      {
        client: "펫담다",
        type: "종합 플랫폼",
        description:
          "반려동물 생애주기에 맞춘 케어와 장례 연계 서비스를 제공하는 종합 플랫폼입니다.",
        href: "https://petdamda.com/",
        tags: ["반려동물", "종합 플랫폼", "반응형"],
        // 첫 화면 캡처 (16:9). public/portfolio/README.md 참고
        thumbnail: "/portfolio/petdamda.jpg",
      },
      {
        client: "생활계산기 (esedy)",
        type: "웹 플랫폼",
        description:
          "생활 속에서 자주 쓰는 계산을 한곳에서 처리할 수 있는 반응형 웹 플랫폼입니다.",
        href: "https://esedy.com/",
        tags: ["웹 플랫폼", "계산기", "반응형"],
        thumbnail: "/portfolio/esedy.jpg",
      },
      {
        client: "케이하이로봇",
        type: "B2B 랜딩페이지",
        description:
          "B2B 고객을 대상으로 한 반응형 랜딩페이지입니다. 핵심 메시지와 문의 동선을 한 화면에 담았습니다.",
        href: "https://celebrated-bublanina-75cc79.netlify.app",
        tags: ["B2B", "랜딩페이지", "반응형"],
        thumbnail: "/portfolio/khirobot.jpg",
      },
      {
        client: "CHANGHO 포트폴리오",
        type: "개인 포트폴리오",
        description:
          "지금 보고 계신 이 사이트입니다. 운영 채널·서비스·제작 실적을 한 페이지에 모은 허브로, 콘텐츠를 설정 파일 한 곳에서 관리하도록 설계했습니다.",
        href: "https://changho.esedy.com",
        tags: ["Next.js", "반응형", "SEO"],
        thumbnail: "/portfolio/changho.jpg",
      },
      {
        client: "신경기로지스",
        type: "기업 홈페이지",
        description:
          "물류 기업의 반응형 기업 홈페이지입니다. 회사 소개와 서비스 안내, 문의 동선을 구성했습니다.",
        href: "https://singyeonggi.com/",
        tags: ["물류", "기업 홈페이지", "반응형"],
        thumbnail: "/portfolio/singyeonggi.jpg",
      },
    ],
  },

  // ---------- 7. Music (Spotify 앨범) ----------
  // 앨범을 추가하려면 아래 배열에 한 줄만 넣으면 됩니다.
  // id = 스포티파이 앨범 링크에서 /album/ 뒤에 오는 문자열
  //   예) https://open.spotify.com/album/2sDqPRdDouf4e3QkJCdASu
  //                                      ^^^^^^^^^^^^^^^^^^^^^^ 이 부분
  //   (?si=... 뒤에 붙는 추적 코드는 넣지 않아도 됩니다)
  // title = 재생 전 카드에 표시되는 앨범명입니다.
  // cover = 보통은 비워 두세요. 빌드할 때 스포티파이에서 앨범 커버를
  //         자동으로 가져옵니다. 가져오기에 실패하거나 다른 이미지를
  //         쓰고 싶을 때만 경로나 주소를 직접 적으면 됩니다.
  music: {
    heading: "발매한 앨범",
    description:
      "AI로 제작해 DistroKid를 통해 전 세계 스트리밍 플랫폼에 발매한 앨범입니다. 아래에서 바로 들어볼 수 있습니다.",
    // 스포티파이 아티스트 페이지 주소를 넣으면 '전체 앨범 보기' 버튼이 표시됩니다.
    artistUrl: "https://open.spotify.com/artist/2w9UTjpzUn0fdVXxQKI4Uh",
    // cover: public/albums 안의 정사각형 이미지 경로입니다.
    // 비워 두면 스포티파이 아이콘이 대신 표시됩니다.
    // tracks: 수록곡 목록입니다. 적어 두면 커버 옆에 표시되고
    // 검색엔진에도 글자로 잡힙니다. 비워 두면 목록만 생략됩니다.
    albums: [
      {
        id: "0DRJkPikkPg0kD8Filafni",
        title: "그 계절의 끝에서",
        cover: "/albums/season-end.jpg",
        tracks: [
          "헤어진 뒤에야",
          "늦은 밤, 너를 생각해",
          "끝내 너를 못 잊었다",
          "이젠 너 없이도 괜찮아",
          "우리의 계절은 여기까지",
        ] as string[],
      },
      {
        id: "7Gs2VT3PwKTcmqHbG5SSUz",
        title: "Midnight Summer",
        cover: "/albums/midnight-summer.jpg",
        tracks: [
          "여름이었다",
          "네온 드라이브 (Neon Drive)",
          "오늘 밤 해변에서",
          "바다로 가자",
          "파도 소리 틀어줘",
          "집에 가기 싫은 밤",
          "Midnight Summer",
        ] as string[],
      },
      {
        id: "2sDqPRdDouf4e3QkJCdASu",
        title: "인생 한잔",
        cover: "/albums/life-one-glass.jpg",
        tracks: [
          "돌아가는 길",
          "한잔의 새벽",
          "서울 야시장",
          "비 오는 포장마차",
          "취했나 봐",
          "그때 우린 젊었다",
          "마지막 소주잔",
        ] as string[],
      },
      {
        id: "13N3QYzoyCxmpwlOStwqXc",
        title: "Neon Velvet",
        cover: "/albums/neon-velvet.jpg",
        tracks: [
          "Neon Velvet",
          "Midnight Salon",
          "Moonlight Runway",
          "Rain On Chrome",
          "Silver Pulse",
          "Neon Dream",
          "Glow Up Tonight",
          "강남 런웨이",
          "미용실 런웨이",
        ] as string[],
      },
      {
        id: "5ZQCHa4MHNXI9PiTCqzoJD",
        title: "PINKY RUNWAY",
        cover: "/albums/pinky-runway.jpg",
        tracks: [
          "PINKY RUNWAY",
          "Flash Makeover",
          "Mirror Pop",
          "Pink Flash",
          "Tiny Bounce",
          "Campfire Dream",
        ] as string[],
      },
      {
        id: "2SnsQLVwTMJ44vFlgKrPHF",
        title: "PINKY KITCHEN",
        cover: "/albums/pinky-kitchen.jpg",
        tracks: [
          "PINKY KITCHEN",
          "Cheese Meltdown",
          "Midnight Noodle Bar",
          "One More Bite",
          "Campfire Bites",
          "Tiny Paw BGM",
        ] as string[],
      },
    ],
  },

  // ---------- 8. Contact / Social ----------
  contact: {
    heading: "함께 만들 이야기가 있다면",
    description:
      "협업, 외주, 자동화 시스템 구축 문의 모두 환영합니다. 메일로 연락 주시면 빠르게 답장드립니다.",
    email: "ktntopia@gmail.com",
  },

  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@changhomusic", icon: "youtube" },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/2w9UTjpzUn0fdVXxQKI4Uh",
      icon: "spotify",
    },
    { label: "네이버 블로그", href: "https://blog.naver.com/ktntopia", icon: "naver" },
    { label: "티스토리", href: "https://ktntopia.tistory.com", icon: "blog" },
    { label: "Email", href: "mailto:ktntopia@gmail.com", icon: "mail" },
  ] as const,

  // ---------- 네비게이션 ----------
  nav: [
    { label: "About", href: "#about" },
    { label: "Channels", href: "#channels" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Music", href: "#music" },
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
export type SocialIcon = (typeof site.socials)[number]["icon"];
