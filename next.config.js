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
    ],
  },
};
module.exports = nextConfig;
