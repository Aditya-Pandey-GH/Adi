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
		],
	},
};

export default nextConfig;
