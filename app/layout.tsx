import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0284c7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://weberseek.info'),
  title: 'WEBERSEEK | Custom Website, Mobile App & Software Development Agency',
  description: 'We engineer fast, high-converting websites starting from ₹2,999, e-commerce storefronts from ₹13,999, and iOS/Android mobile apps from ₹11,999. Clean code, 100% IP ownership, and direct engineer access.',
  keywords: [
    'web development',
    'custom website design',
    'single page website',
    'ecommerce website',
    'mobile app development',
    'iOS apps',
    'Android apps',
    'custom software',
    'nextjs agency',
    'flutter developer',
    'WeberSeek',
    'weberseek.info',
  ],
  authors: [{ name: 'WeberSeek' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://weberseek.info/',
    title: 'WEBERSEEK | Custom Website, Mobile App & Software Development',
    description: 'Fast websites from ₹2,999, e-commerce from ₹13,999, and mobile apps from ₹11,999. Direct engineer access & full code ownership.',
    siteName: 'WeberSeek',
    locale: 'en_IN',
    images: [
      {
        url: '/images/backgrounds/WHITEBACKGROUND.png',
        width: 1200,
        height: 630,
        alt: 'WeberSeek Agency Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBERSEEK | Custom Website, Mobile App & Software Development',
    description: 'Fast websites from ₹2,999, e-commerce from ₹13,999, and mobile apps from ₹11,999. Direct engineer access & full code ownership.',
    images: ['/images/backgrounds/WHITEBACKGROUND.png'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://weberseek.info/#website',
        url: 'https://weberseek.info/',
        name: 'WeberSeek',
        description: 'Full-Stack Digital Agency - Websites, Mobile Apps & Custom Software',
        publisher: {
          '@id': 'https://weberseek.info/#organization',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://weberseek.info/#organization',
        name: 'WeberSeek',
        url: 'https://weberseek.info/',
        logo: 'https://weberseek.info/images/backgrounds/WHITEBACKGROUND.png',
        image: 'https://weberseek.info/images/backgrounds/WHITEBACKGROUND.png',
        telephone: '+917024768125',
        priceRange: '₹2,999 - ₹49,999',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software & Web Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Single Page Website Development',
                description: 'High-converting single page responsive websites with fast load speed and Google SEO readiness.',
              },
              price: '2999',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'E-Commerce Website Development',
                description: 'Full e-commerce stores with product catalogs, cart, payment gateway integration and order dashboard.',
              },
              price: '13999',
              priceCurrency: 'INR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Business Mobile App Development',
                description: 'Cross-platform iOS and Android mobile applications built with Flutter and React Native.',
              },
              price: '11999',
              priceCurrency: 'INR',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does a website cost with WeberSeek?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Single page websites start from ₹2,999, full e-commerce websites start from ₹13,999, and custom mobile apps start from ₹11,999.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I request a quote or start a project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can use our interactive project cost estimator on the website or message us directly on WhatsApp at +91 7024768125 for an instant scope breakdown.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I get full ownership of the source code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, 100% full source code ownership and intellectual property rights are handed over to you upon project completion.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Preload Critical High-Priority Hero Background Image */}
        <link
          rel="preload"
          as="image"
          href="/images/backgrounds/background 2.webp"
          type="image/webp"
          // @ts-expect-error fetchpriority standard in HTML5
          fetchpriority="high"
        />
        {/* Preload Primary Brand Geometric Font */}
        <link
          rel="preload"
          href="/fonts/anurati-regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
