/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure compiler options
  compiler: {
    // Disable automatic ID generation for form elements
    reactRemoveProperties: true,
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production'
  },
  
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Turbopack configuration
  turbopack: {
    // Enable Turbopack with default settings
    // Add any Turbopack-specific configurations here
  },
  
  // Disable Turbopack in favor of webpack
  experimental: {
    // Keep this empty or remove if not needed
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add any custom webpack configuration here
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      };
    }
    
    return config;
  }
}

module.exports = nextConfig