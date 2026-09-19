// ============================================================
// /content-hub 페이지(콘텐츠 허브 소개)의 내용입니다.
// 이 파일만 고치면 페이지 내용이 전부 바뀝니다.
//
// 아래 preview 는 아직 개발 중인 도구의 '화면 미리보기'입니다.
// 실제로 동작하는 값이 아니라 보여 주기 위한 예시 내용입니다.
// ============================================================

export const contentHub = {
  title: "콘텐츠 허브",
  subtitle: "Coming Soon",
  badge: "개발 중",
  emoji: "🗂️",
  description:
    "주제 하나를 넣으면 공식 자료를 확인해 원본을 쓰고, 채널마다 새 문장으로 다시 써서 승인 뒤 예약 발행까지 이어지는 블로그 글 자동화 도구입니다.",

  // 무엇을 해결하는 도구인지
  features: [
    {
      emoji: "🔎",
      title: "공식 출처 확인",
      description:
        "정부·기관 공식 자료에서 조건과 기한을 먼저 확인합니다. 확인되지 않은 내용은 글에 넣지 않습니다.",
    },
    {
      emoji: "✏️",
      title: "채널별 재작성",
      description:
        "같은 글을 복사해 돌리지 않습니다. 채널마다 제목·도입·문장 구조를 새로 씁니다.",
    },
    {
      emoji: "✅",
      title: "승인 후 발행",
      description:
        "발행 전에 검수함에 모아 둡니다. 직접 확인하고 승인한 글만 예약 시간에 나갑니다.",
    },
  ],

  progress: [
    { label: "주제 수집 · 공식자료 확인", percent: 80 },
    { label: "채널별 재작성" },
    { label: "검수·승인 화면" },
    { label: "예약 발행 연동" },
  ] as { label: string; percent?: number }[],

  stack: ["Python", "네이버", "티스토리", "예약 발행"],

  // ---------- 화면 미리보기 ----------
  // 아래 값은 전부 예시입니다. 실제 발행 실적이 아닙니다.
  preview: {
    owner: "임창호",
    appName: "콘텐츠 허브",
    mode: "승인 후 발행 모드",
    menu: ["오늘의 작업", "콘텐츠 보관함", "발행 일정", "채널 연결"],
    principleTitle: "운영 원칙",
    principle:
      "공식 출처 확인 → 채널별 새 문장 → 대표 승인. 복붙 공장은 출입 금지입니다.",

    stats: [
      { label: "오늘 발행", value: "2건", note: "08:00 · 19:00" },
      { label: "검수 대기", value: "1건", note: "대표님 확인 필요" },
      { label: "이번 주 파이프라인", value: "14건", note: "4개 채널 재가공" },
    ],

    composer: {
      label: "새 주제 입력",
      placeholder: "예: 2026년 K-패스 환급 대상과 신청법",
      button: "콘텐츠 만들기",
      steps: [
        "주제 수집",
        "공식자료 확인",
        "원본 작성",
        "채널별 재작성",
        "대표 승인",
        "예약 발행",
      ],
    },

    inbox: {
      heading: "검수함",
      description: "제목을 눌러 내용을 확인하세요.",
      searchPlaceholder: "검색",
      items: [
        {
          state: "검수대기",
          title: "2026 통신비 미환급금 조회와 신청 방법",
          meta: "환급금·숨은돈 · 오늘 19:00",
          score: 94,
          active: true,
        },
        {
          state: "승인완료",
          title: "건강보험 본인부담상한액 환급 대상 총정리",
          meta: "정부지원금 · 9월 15일 08:00",
          score: 91,
          active: false,
        },
        {
          state: "예약발행",
          title: "주민등록초본 인터넷 발급 준비물과 수수료",
          meta: "민원서류 · 9월 15일 19:00",
          score: 97,
          active: false,
        },
      ],
    },

    detail: {
      state: "검수대기",
      scoreLabel: "검증점수",
      score: 94,
      title: "2026 통신비 미환급금 조회와 신청 방법",
      checkTitle: "발행 전 확인",
      checkBody: "공식 조회 경로와 신청 시 주의사항 확인 완료",
      channelsHeading: "채널별 결과물",
      channels: ["네이버", "티스토리", "esedy", "쇼츠"],
      channelAction: "미리보기",
      outlineHeading: "핵심 구성",
      outline: [
        "대상과 결론을 첫 문단에 제시",
        "공식 출처 기준으로 조건·기한·방법 정리",
        "표 3개, 주의사항, FAQ 5개 포함",
        "채널마다 제목·도입·문장 구조를 새로 작성",
      ],
      actions: { secondary: "수정 요청", primary: "승인하고 예약" },
    },
  },

  updates: {
    heading: "공개되면 알려드릴까요?",
    description:
      "도구가 공개되면 메일로 알려드립니다. 아래 버튼을 누르면 메일 앱이 열립니다.",
    label: "메일로 소식 받기",
    mailSubject: "콘텐츠 허브 공개 소식 받고 싶습니다",
  },
};
