/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Ensures correct GitHub Pages routing
  trailingSlash: true,         // Helps prevent 404 errors 
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
