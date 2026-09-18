import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.metaTitle,
    template: `%s | ${site.name}`,
  },
  description: site.metaDescription,
  keywords: [site.name, site.role, "포트폴리오", "Portfolio"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.siteUrl,
    siteName: site.metaTitle,
    title: site.metaTitle,
    description: site.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// 새로고침 시 다크모드가 깜빡이는 현상(FOUC)을 막아 줍니다.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          본문으로 건너뛰기
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
