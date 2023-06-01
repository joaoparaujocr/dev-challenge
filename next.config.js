/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'challenge-seven-zeta.vercel.app',
        pathname: "**"
      },
    ],
  },
}

module.exports = nextConfig
