/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '',
          pathname: '/pro/logos/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  