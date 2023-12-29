require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  env: {
    serviceID: process.env.SERVICE_ID,
    templateID: process.env.TEMPLATE_ID,
    userID: process.env.USER_ID
  }
};

module.exports = nextConfig;