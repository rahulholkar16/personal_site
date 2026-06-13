import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.29.129"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ankitmohanty.vercel.app",
        pathname: "/_next/static/media/**",
      },
    ],
    qualities: [75, 80, 85],
  },
};

export default nextConfig;
