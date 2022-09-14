/** @type {import('next').NextConfig} */
const nextConfig = {
  	reactStrictMode: false,
	swcMinify: true,
	compress: true,
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
