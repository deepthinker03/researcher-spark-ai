/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com', 'via.placeholder.com'],
  },
  // Remove the experimental.serverActions line as it's no longer needed
}

module.exports = nextConfig