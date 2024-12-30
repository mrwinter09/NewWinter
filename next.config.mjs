/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes wallet connect dependency issue
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: ["static.coinstats.app", "coin-images.coingecko.com"], // Add the hostname here
  },
};

export default nextConfig;
