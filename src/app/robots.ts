import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 모든 검색 로봇 허용
      { userAgent: "*", allow: "/" },
      // 네이버 검색 로봇. 네이버 서치어드바이저가 이 줄을 따로 확인합니다.
      { userAgent: "Yeti", allow: "/" },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
