/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc",
			},
			{
				protocol: "https",
				hostname: "img.youtube.com",
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
		],
	},
};

export default nextConfig;
