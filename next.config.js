/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    transpilePackages: ['@web3modal/ethereum', '@web3modal/react']
  },
}

module.exports = nextConfig
