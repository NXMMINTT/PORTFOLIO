import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // รัน loader (Tailwind) ใน worker thread แทน child process ที่เปิดไม่ขึ้นบนเครื่องนี้ (0xc0000142)
    turbopackPluginRuntimeStrategy: "forceWorkerThreads",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
