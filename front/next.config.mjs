/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.atrapalo.com.ar",
			},
			{
				protocol: "https",
				hostname: "www.google.com",
			},
			{
				protocol: "https",
				hostname: "media.admagazine.com",
			},
			{
				protocol: "https",
				hostname: "topadventure.com",
			},
			{
				protocol: "https",
				hostname: "prensa.cba.gov.ar",
			},
			{
				protocol: "https",
				hostname: "media.kasperskydaily.com",
			},
			{
				protocol: "https", 
				hostname: 'asset.cloudinary.com', 
			}
		],
	},
};

export default nextConfig;
