/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
