# UTM 링크 모음

각 플랫폼에 심을 사이트 주소입니다. 꼬리표(UTM)를 붙여 두면 GA4 에서
**어느 플랫폼이 실제로 방문자를 보내는지** 숫자로 확인할 수 있습니다.

확인 위치: GA4 → `보고서` → `획득` → `트래픽 획득` → 세션 소스/매체

---

## 유튜브 (6채널)

`utm_source` 는 모두 `youtube` 로 묶고, `utm_campaign` 으로 채널을 구분합니다.
그래서 "유튜브 전체 유입"과 "채널별 유입"을 둘 다 볼 수 있습니다.

| 채널 | 링크 |
| --- | --- |
| 동물쉐프 | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=dongmulchef` |
| 핑키미용실 | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=pinky_salon` |
| 핑키 감동극장 | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=pinky_theater` |
| 창호 | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=changhomusic` |
| ELIRA | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=eliramusic` |
| 꿀템모음 | `https://changho.esedy.com/?utm_source=youtube&utm_medium=channel&utm_campaign=gooditemhub` |

넣는 곳: YouTube Studio → `맞춤설정` → `기본 정보` → `링크`

---

## 네이버

| 위치 | 링크 |
| --- | --- |
| 블로그 위젯 | `https://changho.esedy.com/?utm_source=naver&utm_medium=blog` |
| 카페 | `https://changho.esedy.com/?utm_source=naver&utm_medium=cafe` |
| 엑스퍼트 | `https://changho.esedy.com/?utm_source=naver&utm_medium=expert` |

---

## 티스토리

| 위치 | 링크 |
| --- | --- |
| 사이드바 배너 | `https://changho.esedy.com/?utm_source=tistory&utm_medium=sidebar` |
| 글 서명 | `https://changho.esedy.com/?utm_source=tistory&utm_medium=post_footer` |

같은 티스토리라도 사이드바와 글 하단 중 **어느 쪽이 더 잘 먹히는지** 나뉘어 보입니다.

---

## 크몽

| 위치 | 링크 |
| --- | --- |
| 포트폴리오 등록 URL | `https://changho.esedy.com/?utm_source=kmong&utm_medium=portfolio` |
| 서비스 상세설명 | `changho.esedy.com` (꼬리표 없이) |

> 크몽 상세설명에는 꼬리표를 붙이지 않는 편이 낫습니다. 긴 추적 파라미터가
> 붙은 주소는 심사에서 불필요한 오해를 살 수 있습니다.

---

## 꼬리표를 붙이지 않는 곳

아래는 **링크가 클릭되지 않고 글자로만 보이는 곳**입니다. 방문자가 주소를
직접 입력해야 하므로 꼬리표를 붙이면 오히려 오타만 늘어납니다.

| 위치 | 적을 주소 |
| --- | --- |
| 스포티파이 아티스트 바이오 | `changho.esedy.com` |
| 네이버 블로그 소개글 | `changho.esedy.com` |

---

## 규칙

새 링크를 만들 때 지킬 것.

- **전부 소문자.** GA4 는 대소문자를 구분해서 `YouTube` 와 `youtube` 가
  다른 출처로 쪼개집니다.
- **띄어쓰기 대신 밑줄.** `pinky_salon` (O) / `pinky salon` (X)
- `utm_source` = 어디서 (플랫폼) · `utm_medium` = 어떤 자리 ·
  `utm_campaign` = 세부 구분

## 티스토리 사이드바 배너 (복사용)

```html
<div style="padding:16px;background:#0f172a;border-radius:12px;text-align:center">
  <div style="color:#fff;font-weight:700;font-size:15px;margin-bottom:8px">
    CHANGHO
  </div>
  <div style="color:#94a3b8;font-size:12px;line-height:1.5;margin-bottom:12px">
    유튜브 6채널 · AI 음악 · 홈페이지 제작
  </div>
  <a href="https://changho.esedy.com/?utm_source=tistory&utm_medium=sidebar"
     target="_blank" rel="noopener"
     style="display:block;padding:9px;background:#e0961e;color:#1a1207;
            border-radius:999px;font-weight:700;font-size:13px;
            text-decoration:none">
    전체 보기 →
  </a>
</div>
```

## 티스토리 글 서명 (복사용)

```html
<hr>
<p style="font-size:13px;color:#64748b">
  ✍️ 운영 채널과 서비스 전체 보기 →
  <a href="https://changho.esedy.com/?utm_source=tistory&utm_medium=post_footer">changho.esedy.com</a>
</p>
```

## 네이버 블로그 위젯 (복사용)

```html
<a href="https://changho.esedy.com/?utm_source=naver&utm_medium=blog" target="_blank">
  CHANGHO 공식 사이트
</a>
```
