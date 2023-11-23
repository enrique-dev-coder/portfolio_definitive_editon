/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({ transpilePackages: ["three"] });

module.exports = nextConfig;
