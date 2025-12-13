import './globals.css'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tiktokwrapped.com'),
  title: 'TikTok Wrapped - Discover Your TikTok Stats & Personality',
  description: 'Upload your TikTok data and discover your watching habits, get a fun rank based on your screen time, see your top searches, favorite content, and more. Your personal TikTok year in review!',
  keywords: [
    'TikTok Wrapped',
    'TikTok Stats',
    'TikTok Analytics',
    'TikTok Data',
    'Screen Time',
    'TikTok Year Review',
    'TikTok Personality',
    'Social Media Analytics',
    'Watch History',
    'TikTok Recap',
    'FYP Analytics',
  ],
  authors: [{ name: 'TikTok Wrapped' }],
  creator: 'TikTok Wrapped',
  publisher: 'TikTok Wrapped',
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
    locale: 'en_US',
    siteName: 'TikTok Wrapped',
    title: 'TikTok Wrapped - Discover Your TikTok Stats',
    description: 'Find out how much time you spent on TikTok, get your personality rank, and see your complete TikTok story. Fun, private, and free!',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TikTok Wrapped - Your TikTok Year in Review',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Wrapped - Discover Your TikTok Stats',
    description: 'Find out how much time you spent on TikTok and get your personality rank! 🎰',
    images: ['/og-image.png'],
    creator: '@tiktokwrapped',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://tiktokwrapped.com',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fe2c55' },
    { media: '(prefers-color-scheme: dark)', color: '#030014' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="application-name" content="TikTok Wrapped" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TikTok Wrapped" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        {children}
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'TikTok Wrapped',
              description: 'Discover your TikTok watching habits, get a fun personality rank, and see your complete TikTok story.',
              url: 'https://tiktokwrapped.com',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'TikTok data analysis',
                'Watch time statistics',
                'Personality ranks',
                'Search history analysis',
                'Private & secure processing',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
