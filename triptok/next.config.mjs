import withWebSpatial from "@webspatial/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = withWebSpatial()({
  reactStrictMode: true,
  swcMinify: true,
  // add other Next.js options here if needed
});

export default nextConfig;