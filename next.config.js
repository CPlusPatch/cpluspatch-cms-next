/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compress: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "i.redd.it"
			}
		],
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
