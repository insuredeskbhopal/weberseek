/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/anurati-regular.otf',
        destination: '/fonts/anurati-regular.otf',
      },
      {
        source: '/WHITEBACKGROUND.png',
        destination: '/images/backgrounds/WHITEBACKGROUND.png',
      },
      {
        source: '/background 2.png',
        destination: '/images/backgrounds/background 2.png',
      },
      {
        source: '/background image.png',
        destination: '/images/backgrounds/background image.png',
      },
      {
        source: '/local_business_bg.jpg',
        destination: '/images/backgrounds/local_business_bg.jpg',
      },
      {
        source: '/estimator_bg_:path*',
        destination: '/images/estimator/estimator_bg_:path*',
      },
      {
        source: '/process_:path*',
        destination: '/images/process/process_:path*',
      },
    ];
  },
};

export default nextConfig;
