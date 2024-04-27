const MillionLint = require('@million/lint');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "cdn-images-1.medium.com"
    }, {
      hostname: "freetribenetwork.org"
    }]
  }
};
module.exports = MillionLint.next({
  rsc: true
})(nextConfig);