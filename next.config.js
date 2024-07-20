const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn-images-1.medium.com",
      },
      {
        hostname: "freetribenetwork.com",
      },
      {
        hostname: "scontent-los2-1.cdninstagram.com",
      },
    ],
  },
};
module.exports = withNextIntl(nextConfig);
