/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  // Add public directory as a base path for assets
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;