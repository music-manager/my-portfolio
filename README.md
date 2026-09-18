# my-portfolio

개인 소개 및 포트폴리오용 반응형 원페이지 웹사이트.
**Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** 기반이며, PC/모바일 대응과 다크모드를 기본 지원합니다.

---

## 1. 바로 실행하기 (3단계)

```bash
npm install     # 1. 패키지 설치
npm run dev     # 2. 개발 서버 실행
```

3. 브라우저에서 http://localhost:3000 접속

---

## 2. 내용 수정하기 — `src/data/site.ts` 하나만 고치면 됩니다

이름, 소개글, 기술스택, 경력, 프로젝트 카드, 이메일, SNS 링크가 **전부 이 파일 한 곳**에 있습니다.
컴포넌트 코드는 건드릴 필요가 없습니다.

| 고치고 싶은 것 | `site.ts` 안의 위치 |
| --- | --- |
| 이름 / 직함 / SEO 문구 | `name`, `role`, `metaTitle`, `metaDescription`, `siteUrl` |
| 히어로 문구, 프로필 사진, 버튼 | `hero` |
| 소개글, 보유 기술, 경력, 관심사 | `about` |
| 프로젝트 카드 (추가/삭제 자유) | `projects` |
| 이메일, 연락 문구 | `contact` |
| GitHub · 블로그 · 유튜브 링크 | `socials` |
| 상단 메뉴 | `nav` |

### 프로필 사진 넣기
1. 사진 파일을 `public/profile.jpg` 로 복사
2. `site.ts` 의 `hero.avatar` 를 `"/profile.jpg"` 로 변경
   (빈 값 `""` 이면 로고 심볼 마크 `public/mark.png` 가 아바타로 표시됩니다)

### 로고 파일

| 파일 | 용도 |
| --- | --- |
| `public/logo.png` | 원본 로고 (보관용) |
| `public/wordmark-light.png` | 헤더 워드마크 — 라이트 모드 (검은 글자) |
| `public/wordmark-dark.png` | 헤더 워드마크 — 다크 모드 (흰 글자) |
| `public/mark.png` | 원형 심볼 마크 (기본 아바타) |
| `src/app/icon.png` | 파비콘 (브라우저 탭) |
| `src/app/apple-icon.png` | iOS 홈 화면 아이콘 |
| `src/app/opengraph-image.png` | 카카오톡·트위터 등 공유 시 미리보기 이미지 |

로고를 교체할 때는 **같은 파일명으로 덮어쓰고**, 워드마크의 경우
`site.ts` 의 `logo.width` / `logo.height` 를 새 이미지의 실제 픽셀 크기로 맞춰 주세요.

### 포인트 색상 바꾸기
`src/app/globals.css` 의 `--color-brand-50` ~ `--color-brand-950` 값만 바꾸면 사이트 전체 색이 한 번에 바뀝니다.

---

## 3. 폴더 구조

```
my-portfolio/
├─ public/                  # 로고 · 워드마크 · 프로필 사진
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # 공통 레이아웃 · SEO 메타데이터 · 다크모드 초기화
│  │  ├─ page.tsx           # 랜딩 페이지 (섹션 조립)
│  │  ├─ globals.css        # Tailwind 설정 · 브랜드 컬러 토큰
│  │  ├─ icon.png           # 파비콘 (로고 심볼)
│  │  ├─ apple-icon.png     # iOS 홈 화면 아이콘
│  │  ├─ opengraph-image.png# 공유 미리보기 이미지
│  │  ├─ sitemap.ts         # /sitemap.xml 자동 생성
│  │  └─ robots.ts          # /robots.txt 자동 생성
│  ├─ components/
│  │  ├─ Header.tsx         # 상단 고정 네비 + 모바일 햄버거 메뉴
│  │  ├─ Hero.tsx           # 1. 메인 히어로 (한 줄 소개 + 프로필)
│  │  ├─ About.tsx          # 2. About Me (기술 · 관심사 · 경력)
│  │  ├─ Projects.tsx       # 3. Projects (사이트 카드 링크)
│  │  ├─ Contact.tsx        # 4. Contact / Social
│  │  ├─ Footer.tsx
│  │  ├─ Section.tsx        # 섹션 공통 래퍼 (제목 스타일 통일)
│  │  ├─ ThemeToggle.tsx    # 다크모드 토글
│  │  └─ Icons.tsx          # SVG 아이콘 모음
│  └─ data/
│     └─ site.ts            # ★ 모든 내용이 들어있는 단일 설정 파일
├─ next.config.mjs
├─ postcss.config.mjs
└─ tsconfig.json
```

---

## 4. 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run typecheck` | 타입 검사 |

---

## 5. 배포하기 (Vercel · 무료)

1. 이 저장소를 GitHub에 push
2. https://vercel.com 접속 → GitHub 계정으로 로그인
3. **Add New → Project** → 이 저장소 선택
4. 설정 변경 없이 **Deploy** 클릭 (Next.js 자동 인식)
5. 배포 완료 후 받은 주소를 `src/data/site.ts` 의 `siteUrl` 에 붙여넣고 다시 push
   → `sitemap.xml`, `robots.txt`, OG 태그가 실제 도메인 기준으로 갱신됩니다

---

## 6. 포함된 기능

- ✅ 모바일 / 태블릿 / PC 반응형 레이아웃
- ✅ 다크모드 (시스템 설정 자동 감지 + 수동 토글, 새로고침 시 깜빡임 없음)
- ✅ 로고 자동 적용 (헤더 워드마크는 라이트/다크 모드에 따라 자동 전환)
- ✅ SEO 메타데이터 · Open Graph 공유 이미지 · sitemap.xml · robots.txt 자동 생성
- ✅ 부드러운 앵커 스크롤 이동
- ✅ 접근성 (건너뛰기 링크, aria 라벨, 키보드 포커스)
- ✅ `prefers-reduced-motion` 대응
- ✅ 전 페이지 정적 생성(SSG) — 로딩 속도 최적화
