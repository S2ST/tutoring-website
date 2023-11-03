/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['firebasestorage.googleapis.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

