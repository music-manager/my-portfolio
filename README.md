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

## 2. 새 사이트로 재사용하기 (템플릿 모드)

이 프로젝트를 다른 사이트의 출발점으로 쓰려면 더미 데이터 파일을 덮어쓰면 됩니다.

```bash
cp src/data/site.example.ts src/data/site.ts
npm run dev
```

`site.example.ts` 는 실제 정보가 하나도 없는 예시 데이터입니다.
로고·프로필 사진·앨범이 비어 있어도 화면이 깨지지 않습니다.

| 비어 있을 때 | 화면 동작 |
| --- | --- |
| `logo.wordmark*` | 헤더에 사이트 이름이 텍스트로 표시 |
| `logo.tagline` | 헤더 이름 아래 한 줄이 숨겨짐 |
| `hero.quote` / `hero.corner*` | 히어로의 보조 문구가 숨겨짐 |
| `about.stats` | 숫자 카드 줄 전체가 숨겨짐 |
| `hero.avatar` + `logo.mark` | 아바타 자리에 이름 첫 글자 표시 |
| `channels.items` / `projects` / `services.items` / `portfolio.items` / `music.albums` | 해당 섹션 전체가 자동으로 숨겨짐 |

> 섹션이 숨겨지면 `nav` 에서도 그 항목을 빼 주세요. 앵커가 빈 곳을 가리키게 됩니다.

`site.ts` 에 항목을 추가했다면 `site.example.ts` 에도 같은 항목을 추가해
두 파일의 구조를 맞춰 주세요.

---

## 3. 내용 수정하기 — `src/data/site.ts` 하나만 고치면 됩니다

이름, 소개글, 기술스택, 경력, 프로젝트 카드, 이메일, SNS 링크가 **전부 이 파일 한 곳**에 있습니다.
컴포넌트 코드는 건드릴 필요가 없습니다.

| 고치고 싶은 것 | `site.ts` 안의 위치 |
| --- | --- |
| 이름 / 직함 / SEO 문구 | `name`, `role`, `metaTitle`, `metaDescription`, `siteUrl` |
| 히어로 문구, 프로필 사진, 버튼 | `hero` |
| 소개글, 보유 기술, 경력, 관심사 | `about` |
| 유튜브 채널 목록 | `channels.items` |
| 운영 사이트·도구 카드 | `projects` |
| 홈페이지 제작 실적 | `portfolio.items` |
| 스포티파이 앨범 목록 | `music.albums` |
| 이메일, 연락 문구 | `contact` |
| 의뢰 가능한 유료 서비스 (크몽·엑스퍼트) | `services.items` |
| GitHub · 블로그 · 유튜브 링크 | `socials` |
| 상단 메뉴 | `nav` |

### 프로필 사진 넣기
1. 사진 파일을 `public/profile.jpg` 로 복사
2. `site.ts` 의 `hero.avatar` 를 `"/profile.jpg"` 로 변경
   (빈 값 `""` 이면 로고 심볼 마크 `public/emblem.png` 가 아바타로 표시됩니다)

### 서비스 추가하기

`src/data/site.ts` 의 `services.items` 배열에 항목을 추가하면 카드가 늘어납니다.

| 필드 | 설명 |
| --- | --- |
| `platform` | 배지에 표시할 플랫폼 이름 (예: `"크몽"`) |
| `accent` | 배지 색상 — `"kmong"` / `"naver"` / `"neutral"` (`as const` 필수) |
| `price` | 가격 배지. 빈 값이면 숨겨짐 |
| `points` | 불릿 목록. 빈 배열이면 숨겨짐 |
| `proofHref` | CTA 아래 보조 링크. 빈 값이면 숨겨짐 |

### 앨범 추가하기 (3단계)

**1단계 — 커버 이미지를 넣습니다.**

앨범 커버를 정사각형(권장 640×640) JPG 로 만들어 `public/albums/` 에 저장합니다.

```
public/albums/내앨범이름.jpg
```

**2단계 — `src/data/site.ts` 의 `music.albums` 배열에 한 칸 추가합니다.**

```ts
{
  id: "여기에_앨범ID",
  title: "앨범 7",
  cover: "/albums/내앨범이름.jpg",
},
```

앨범 ID는 스포티파이 링크의 `/album/` 뒤에 오는 문자열입니다.

```
https://open.spotify.com/album/2sDqPRdDouf4e3QkJCdASu?si=...
                               └──────── 이 부분 ────────┘
```

**3단계 — 끝입니다.** 배열에 적은 순서 그대로 화면에 표시됩니다.

`cover` 를 빈 문자열(`""`)로 두어도 화면은 깨지지 않습니다.
그 앨범만 스포티파이 아이콘 카드로 표시되고, 나머지 동작은 똑같습니다.

> **커버를 교체할 때는 파일 이름도 함께 바꾸세요.**
> 같은 이름으로 덮어쓰면 방문자 브라우저와 CDN 에 남은 예전 이미지가 계속 보일 수 있습니다.

카드를 누르기 전까지는 스포티파이에 아무 요청도 보내지 않습니다.
누르는 순간 공식 임베드 플레이어로 바뀌어 사이트 안에서 바로 재생됩니다.

`music.artistUrl` 에 스포티파이 아티스트 페이지 주소를 넣으면
앨범 목록 아래에 "스포티파이에서 전체 앨범 보기" 버튼이 나타납니다.

### 로고 파일

| 파일 | 용도 |
| --- | --- |
| `public/emblem.png` | 원형 엠블럼 — 히어로 아바타 (배경 투명) |
| `public/logo.png` | 원본 로고 (보관용) |
| `src/app/icon.png` | 파비콘 (브라우저 탭) |
| `src/app/apple-icon.png` | iOS 홈 화면 아이콘 |
| `src/app/opengraph-image.png` | 카카오톡·트위터 등 공유 시 미리보기 이미지 |

헤더의 워드마크는 이미지가 아니라 **텍스트로 렌더링**됩니다.
`site.ts` 의 `name` 과 `logo.tagline` 을 고치면 됩니다.

워드마크 이미지를 쓰고 싶다면 `/public` 에 넣고 `logo.wordmarkLight` /
`logo.wordmarkDark` 에 경로를, `logo.width` / `logo.height` 에 실제 픽셀 크기를 적으세요.

> ⚠️ 로고를 교체할 때는 **파일 이름을 바꾸세요.** 같은 이름으로 덮어쓰면
> Next.js 이미지 캐시가 이전 버전을 계속 내보낼 수 있습니다.

### 포인트 색상 바꾸기
`src/app/globals.css` 의 `--color-brand-50` ~ `--color-brand-950` 값만 바꾸면 사이트 전체 색이 한 번에 바뀝니다.

---

## 4. 폴더 구조

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
│  │  ├─ privacy/page.tsx   # /privacy 개인정보처리방침
│  │  ├─ sitemap.ts         # /sitemap.xml 자동 생성
│  │  └─ robots.ts          # /robots.txt 자동 생성
│  ├─ components/
│  │  ├─ Header.tsx         # 상단 고정 네비 + 모바일 햄버거 메뉴
│  │  ├─ Hero.tsx           # 1. 메인 히어로 (한 줄 소개 + 프로필)
│  │  ├─ About.tsx          # 2. About Me (기술 · 관심사 · 경력)
│  │  ├─ Channels.tsx       # 3. Channels (유튜브 채널)
│  │  ├─ Projects.tsx       # 4. Projects (운영 사이트·도구)
│  │  ├─ Services.tsx       # 5. Services (의뢰 가능한 유료 서비스)
│  │  ├─ Portfolio.tsx      # 6. Portfolio (홈페이지 제작 실적)
│  │  ├─ Music.tsx          # 7. Music (스포티파이 앨범 플레이어)
│  │  ├─ Contact.tsx        # 8. Contact / Social
│  │  ├─ Footer.tsx
│  │  ├─ Analytics.tsx      # GA4 로드 + 외부 링크 클릭 수집
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

## 5. Google Analytics 4 연결

측정 ID를 환경변수로 넣으면 자동으로 동작합니다. **값이 없으면 GA 스크립트를 아예 로드하지 않으므로** 로컬 개발 중에 통계가 오염되지 않습니다.

**로컬**
```bash
cp .env.example .env.local
# .env.local 을 열어 NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX 입력
```

**Vercel**
`Settings` → `Environment Variables` → `NEXT_PUBLIC_GA_ID` 추가 → 재배포

### 자동으로 수집되는 것

기본 페이지뷰 외에, **외부 링크 클릭을 `outbound_click` 이벤트로 수집**합니다.
`Analytics.tsx` 한 곳에서 클릭을 위임 처리하므로 링크가 늘어나도 코드를 고칠 필요가 없습니다.

| 파라미터 | 값 예시 | 용도 |
| --- | --- | --- |
| `section` | `channels`, `services`, `portfolio` | 어느 섹션에서 클릭했는지 |
| `link_text` | `창호`, `크몽에서 보기` | 무엇을 눌렀는지 |
| `link_url` | `https://kmong.com/gig/815010` | 어디로 갔는지 |

페이지 내 앵커 이동(`#about` 등)은 집계하지 않습니다.

> `section` / `link_text` / `link_url` 을 GA4 리포트에서 쓰려면
> GA4 → `관리` → `맞춤 정의` → `맞춤 측정기준 만들기` 에서 각각 등록해야 합니다.
> 등록 전에도 `실시간` 과 `DebugView` 에서는 값이 보입니다.

### 채널 배너

유튜브 6채널용 배너는 [`assets/youtube-banners/`](assets/youtube-banners/) 에 있습니다.
사이트와 같은 골드 톤이며 유튜브 안전영역 규격을 맞췄습니다.

### 유입 출처 측정

각 플랫폼에 심을 UTM 링크는 [`docs/utm-links.md`](docs/utm-links.md) 에 정리해 두었습니다.

---

## 6. 검색엔진 등록 (구글 · 네이버)

검색 결과에 사이트가 나오게 하려면 두 곳에 등록해야 합니다.
**사이트를 먼저 배포한 뒤** 진행하세요.

### 준비된 것 (수정할 필요 없음)

| 주소 | 용도 |
| --- | --- |
| `/sitemap.xml` | 검색엔진에 페이지 목록을 알려줍니다 |
| `/robots.txt` | 수집 허용 규칙. 네이버 로봇(`Yeti`)도 명시해 두었습니다 |

두 파일 모두 `site.ts` 의 `siteUrl` 을 보고 자동으로 만들어집니다.
도메인이 바뀌면 `siteUrl` 만 고치면 됩니다.

### 소유권 확인 코드 넣기

각 콘솔에서 **HTML 태그** 방식을 고르면 아래처럼 나옵니다.

```html
<meta name="google-site-verification" content="abc123def456" />
```

여기서 **`content=` 안의 값만** 복사해 `src/data/site.ts` 에 넣습니다.
`<meta ...>` 태그 전체를 넣으면 안 됩니다.

```ts
verification: {
  google: "abc123def456",
  naver: "xyz789uvw012",
},
```

저장하고 배포하면 `<head>` 에 태그가 들어갑니다.
값이 비어 있으면 그 태그는 아예 출력되지 않으므로, 한쪽만 먼저 등록해도 됩니다.

### 등록 주소

| 검색엔진 | 주소 |
| --- | --- |
| 구글 서치콘솔 | https://search.google.com/search-console |
| 네이버 서치어드바이저 | https://searchadvisor.naver.com |

등록을 마친 뒤 두 콘솔 모두에 **사이트맵 주소**(`https://내도메인/sitemap.xml`)를
따로 제출해야 수집이 시작됩니다.

---

## 7. 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run typecheck` | 타입 검사 |

---

## 8. 배포하기 (Vercel · 무료)

1. 이 저장소를 GitHub에 push
2. https://vercel.com 접속 → GitHub 계정으로 로그인
3. **Add New → Project** → 이 저장소 선택
4. 설정 변경 없이 **Deploy** 클릭 (Next.js 자동 인식)
5. 배포 완료 후 받은 주소를 `src/data/site.ts` 의 `siteUrl` 에 붙여넣고 다시 push
   → `sitemap.xml`, `robots.txt`, OG 태그가 실제 도메인 기준으로 갱신됩니다

---

## 9. 포함된 기능

- ✅ 모바일 / 태블릿 / PC 반응형 레이아웃
- ✅ 다크모드 (시스템 설정 자동 감지 + 수동 토글, 새로고침 시 깜빡임 없음)
- ✅ 스포티파이 앨범 플레이어 내장 (커버를 누르면 사이트 안에서 바로 재생)
- ✅ 검색엔진 등록 준비 완료 (sitemap.xml · robots.txt · 구글/네이버 소유권 확인 태그)
- ✅ 로고 자동 적용 (헤더 워드마크는 라이트/다크 모드에 따라 자동 전환)
- ✅ SEO 메타데이터 · Open Graph 공유 이미지 · sitemap.xml · robots.txt 자동 생성
- ✅ 부드러운 앵커 스크롤 이동
- ✅ 접근성 (건너뛰기 링크, aria 라벨, 키보드 포커스)
- ✅ `prefers-reduced-motion` 대응
- ✅ 전 페이지 정적 생성(SSG) — 로딩 속도 최적화
- ✅ GA4 연동 (측정 ID가 없으면 스크립트 미로드) + 외부 링크 클릭 자동 수집
- ✅ 개인정보처리방침 페이지 (`/privacy`) — 실제 수집 항목 기준으로 작성
