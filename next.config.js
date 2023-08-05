const runtimeCaching = require("next-pwa/cache");
const nextPwa = require("next-pwa");
const withPWA = nextPwa({
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
    // scope: './src',
    // skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    // runtimeCaching,
    // buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  reactStrictMode: false,
  distDir: 'build',
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  env: {
    API_KEY: process.env.API_KEY,
  },
  // typescript: {
    // ignoreBuildErrors: true,
  // },
});
module.exports = nextConfig;