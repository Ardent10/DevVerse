/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  // Images: {
  //   domains: [""],
  // },
  webpack(config, options) {
     config.resolve.alias["@/"] = path.join(__dirname, "src");
     config.resolve.alias["@modules"] = path.join(__dirname, "src/modules");
     config.resolve.alias["@utils"] = path.join(__dirname, "src/utils");
     config.resolve.alias["@common"] = path.join(
       __dirname,
       "src/modules/common"
     );
     return config;
  },
};

module.exports = nextConfig;
