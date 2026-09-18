// ============================================================
// 이 파일만 수정하면 사이트 전체 내용이 바뀝니다.
// (이미지, 이름, 링크, 프로젝트 카드 전부 여기서 관리)
// ============================================================

export const site = {
  // ---------- 기본 정보 (SEO / 브라우저 탭) ----------
  name: "CHANGHO",
  role: "AI 콘텐츠 자동화 크리에이터",
  siteUrl: "https://example.com", // 배포 후 실제 도메인으로 변경
  metaTitle: "CHANGHO | AI 콘텐츠 자동화 크리에이터",
  metaDescription:
    "AI로 영상·음악·블로그 콘텐츠를 자동으로 만들고 유통합니다. 포트폴리오와 운영 중인 채널을 소개합니다.",

  // ---------- 로고 ----------
  // 로고 이미지는 /public 에 있습니다. 교체하려면 같은 이름으로 덮어쓰고
  // width/height(원본 픽셀 크기)만 맞춰 주세요.
  logo: {
    // 헤더 워드마크 — 배경색에 따라 자동으로 바뀝니다
    wordmarkLight: "/wordmark-light.png", // 밝은 배경용 (검은 글자)
    wordmarkDark: "/wordmark-dark.png", // 어두운 배경용 (흰 글자)
    width: 593,
    height: 96,
    // 원형 심볼 마크 — 프로필 사진이 없을 때 아바타로 사용
    mark: "/mark.png",
  },

  // ---------- 1. 히어로 섹션 ----------
  hero: {
    badge: "지금 새로운 협업을 찾고 있습니다",
    headline: "AI로 콘텐츠를 자동으로 만들고, 유통하고, 수익화합니다.",
    tagline:
      "유튜브 쇼츠·AI 음악·블로그까지, 기획부터 발행까지 전 과정을 자동화하는 시스템을 만듭니다.",
    // /public 폴더에 사진을 넣고 "/profile.jpg" 처럼 적으면 사진이 표시됩니다.
    // 빈 값("")이면 로고 심볼 마크(logo.mark)가 대신 표시됩니다.
    avatar: "",
    primaryCta: { label: "프로젝트 보기", href: "#projects" },
    secondaryCta: { label: "연락하기", href: "#contact" },
  },

  // ---------- 2. About Me ----------
  about: {
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
          "유튜브 쇼츠·롱폼 채널과 AI 음악 레이블을 동시 운영. 자동화 파이프라인으로 월 200편 이상 제작.",
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

  // ---------- 3. Projects ----------
  // 운영 중인 사이트 / 채널 / 서비스를 카드로 보여줍니다.
  projects: [
    {
      title: "AI 쇼츠 채널",
      description:
        "동물 구조 스토리 시리즈를 매일 자동 발행하는 유튜브 쇼츠 채널입니다. 대본 생성부터 업로드까지 전 과정을 자동화했습니다.",
      href: "https://youtube.com/@yourchannel",
      tags: ["YouTube", "Shorts", "자동화"],
      status: "운영 중",
      emoji: "🎬",
    },
    {
      title: "AI 음악 레이블",
      description:
        "Suno AI로 제작한 트랙을 DistroKid를 통해 Spotify·Apple Music 등 글로벌 플랫폼에 발매합니다.",
      href: "https://open.spotify.com/",
      tags: ["Suno AI", "DistroKid", "음원 유통"],
      status: "운영 중",
      emoji: "🎵",
    },
    {
      title: "티스토리 블로그",
      description:
        "검색 유입 중심의 리뷰·정보 블로그. SEO 최적화 글을 자동 초안 생성 후 발행하고 제휴 링크로 수익화합니다.",
      href: "https://yourblog.tistory.com",
      tags: ["SEO", "블로그", "제휴 마케팅"],
      status: "운영 중",
      emoji: "✍️",
    },
    {
      title: "콘텐츠 자동화 툴킷",
      description:
        "ffmpeg와 Whisper를 조합해 자막·나레이션·BGM을 자동 합성하는 내부 제작 도구입니다.",
      href: "https://github.com/yourname",
      tags: ["Python", "ffmpeg", "Whisper"],
      status: "개발 중",
      emoji: "🛠️",
    },
  ],

  // ---------- 4. Music (Spotify 앨범) ----------
  // 앨범을 추가하려면 아래 배열에 한 줄만 넣으면 됩니다.
  // id = 스포티파이 앨범 링크에서 /album/ 뒤에 오는 문자열
  //   예) https://open.spotify.com/album/2sDqPRdDouf4e3QkJCdASu
  //                                      ^^^^^^^^^^^^^^^^^^^^^^ 이 부분
  //   (?si=... 뒤에 붙는 추적 코드는 넣지 않아도 됩니다)
  // title = 화면에는 스포티파이가 실제 앨범명을 표시하므로,
  //         여기 값은 스크린리더·SEO용 설명으로만 쓰입니다.
  music: {
    heading: "발매한 앨범",
    description:
      "AI로 제작해 DistroKid를 통해 전 세계 스트리밍 플랫폼에 발매한 앨범입니다. 아래에서 바로 들어볼 수 있습니다.",
    // 스포티파이 아티스트 페이지 주소를 넣으면 '전체 앨범 보기' 버튼이 표시됩니다.
    artistUrl: "",
    albums: [
      { id: "2sDqPRdDouf4e3QkJCdASu", title: "앨범 1" },
      { id: "7Gs2VT3PwKTcmqHbG5SSUz", title: "앨범 2" },
      { id: "13N3QYzoyCxmpwlOStwqXc", title: "앨범 3" },
      { id: "2SnsQLVwTMJ44vFlgKrPHF", title: "앨범 4" },
      { id: "5ZQCHa4MHNXI9PiTCqzoJD", title: "앨범 5" },
      { id: "0DRJkPikkPg0kD8Filafni", title: "앨범 6" },
    ],
  },

  // ---------- 5. Contact / Social ----------
  contact: {
    heading: "함께 만들 이야기가 있다면",
    description:
      "협업, 외주, 자동화 시스템 구축 문의 모두 환영합니다. 메일로 연락 주시면 빠르게 답장드립니다.",
    email: "your@email.com",
  },

  socials: [
    { label: "Email", href: "mailto:your@email.com", icon: "mail" },
    { label: "GitHub", href: "https://github.com/yourname", icon: "github" },
    { label: "블로그", href: "https://yourblog.tistory.com", icon: "blog" },
    { label: "YouTube", href: "https://youtube.com/@yourchannel", icon: "youtube" },
  ] as const,

  // ---------- 네비게이션 ----------
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Music", href: "#music" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Site = typeof site;
export type Project = (typeof site.projects)[number];
export type Album = (typeof site.music.albums)[number];
export type SocialIcon = (typeof site.socials)[number]["icon"];
