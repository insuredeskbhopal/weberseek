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
        source: '/WHITEBACKGROUND.:ext',
        destination: '/images/backgrounds/WHITEBACKGROUND.:ext',
      },
      {
        source: '/background%202.:ext',
        destination: '/images/backgrounds/background 2.:ext',
      },
      {
        source: '/background 2.:ext',
        destination: '/images/backgrounds/background 2.:ext',
      },
      {
        source: '/background%20image.:ext',
        destination: '/images/backgrounds/background image.:ext',
      },
      {
        source: '/local_business_bg.:ext',
        destination: '/images/backgrounds/local_business_bg.:ext',
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
