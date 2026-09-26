/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 없어진 페이지로 들어온 사람(검색·옛 링크)을 새 위치로 보냅니다.
  async redirects() {
    return [
      // 콘텐츠 허브(개발 중 미리보기)는 LCH AI OFFICE 로 완성되어
      // 홈의 Projects 대표 카드로 옮겼습니다.
      { source: "/content-hub", destination: "/#projects", permanent: true },
    ];
  },
};

export default nextConfig;
