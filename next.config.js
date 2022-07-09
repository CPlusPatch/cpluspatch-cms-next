/** @type {import('next').NextConfig} */
const nextConfig = {
  	reactStrictMode: false,
	experimental: {
		images: {
            allowFutureImage: true
        }
	},
}

module.exports = nextConfig
