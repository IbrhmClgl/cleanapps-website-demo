/** @type {import('next').NextConfig} */
// const nextSafe = require("next-safe");

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self';
//   style-src 'self';
//   font-src 'self';
// `;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // {
          //   key: "Content-Security-Policy",
          //      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()

          // },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
});
