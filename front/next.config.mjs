/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.atrapalo.com.ar", "www.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
