/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com', 'via.placeholder.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig