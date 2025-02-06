/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio-site", // Ensures correct GitHub Pages routing
  trailingSlash: true,         // Helps prevent 404 errors
  distDir: "out", 
  reactStrictMode: true,
};


export default nextConfig;
