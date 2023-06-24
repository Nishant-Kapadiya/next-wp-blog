if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    reactStrictMode: true,
    domains: [
      'localhost',
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-nishant-kapadiya.pantheonsite.io',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
module.exports = nextConfig