/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },

  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.(mp4|mp3|ogv|oga|webm)$/i,
      type: "asset/resource",
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig
