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
				hostname: "i.redd.it",
			},
		],
		deviceSizes: [
			200, 640, 750, 828, 1080, 1200, 1920, 2048, 2400, 2800, 3200, 3840,
		],
		formats: ["image/avif", "image/webp"],
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
