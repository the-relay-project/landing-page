/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'],
  },
  // Add production domain info
  async rewrites() {
    return {
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'relay.cptcr.dev',
            },
          ],
          destination: '/:path*',
        },
      ],
    }
  },
  // Enable domain settings
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://relay.cptcr.dev',
    SITE_NAME: 'The Relay Project',
  },
};

module.exports = nextConfig;