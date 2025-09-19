// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;

/* @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignores ESLint errors during build
  },
};

module.exports = nextConfig;

