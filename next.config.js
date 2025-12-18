/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'ui-avatars.com', 'images.unsplash.com'],
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
