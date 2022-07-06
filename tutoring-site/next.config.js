/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig

