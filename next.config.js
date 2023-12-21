/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["www.noiise.com", "another-domain.com", "example.com"], // Add domains here
  },
};

module.exports = nextConfig;
