import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Specify the turbopack root to silence the warning
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
  // Image configuration for Sanity CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
