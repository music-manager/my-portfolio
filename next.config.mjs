/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // 스포티파이 앨범 커버 (i.scdn.co)
      { protocol: "https", hostname: "i.scdn.co", pathname: "/image/**" },
    ],
  },
};

export default nextConfig;
