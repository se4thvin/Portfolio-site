/** @type {import('next').NextConfig} */
const nextConfig = {
 // Ensures correct GitHub Pages routing
  trailingSlash: true,         // Helps prevent 404 errors 
  reactStrictMode: true,
  // Explicitly set the output directory
  distDir: '.next',
};


export default nextConfig;
