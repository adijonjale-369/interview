/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {
        ".css": ["style-loader", "css-loader"]
      }
    }
  },
  webpack(config) {
    return config;
  }
};

module.exports = nextConfig;
