import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Donna Gabriel Consulting | Motivational Speaker, Coach & Facilitator | Melbourne',
  description:
    'Get Donna & Get Moving! Professional coaching, workshops, and speaking services to help you find your flourish. Based in Melbourne, working with individuals and organizations across Australia.',
  keywords: [
    'motivational speaker Melbourne',
    'life coach Australia',
    'workshop facilitator',
    'keynote speaker',
    'professional development',
    'personal growth coach',
    'corporate training',
    'NDIS programs',
    'Finding Your Flourish',
    'Donna Gabriel',
    'coaching services',
    'leadership development',
  ],
  authors: [{ name: 'Donna Gabriel' }],
  creator: 'Donna Gabriel',
  publisher: 'Donna Gabriel Consulting',
  metadataBase: new URL('https://donnagabriel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Donna Gabriel Consulting | Motivational Speaker, Coach & Facilitator',
    description:
      'Get Donna & Get Moving! Professional coaching, workshops, and speaking services to help you find your flourish.',
    url: 'https://donnagabriel.com',
    siteName: 'Donna Gabriel Consulting',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Donna Gabriel - Motivational Speaker and Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donna Gabriel Consulting | Motivational Speaker, Coach & Facilitator',
    description:
      'Get Donna & Get Moving! Professional coaching, workshops, and speaking services to help you find your flourish.',
    images: ['/images/hero.webp'],
  },
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
  verification: {
    google: 'add-your-google-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly Preconnect for faster loading */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Donna Gabriel',
              jobTitle: 'Motivational Speaker, Coach & Facilitator',
              url: 'https://donnagabriel.com',
              email: 'donna@donnagabriel.com.au',
              telephone: '+61414250932',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Melbourne',
                addressRegion: 'VIC',
                addressCountry: 'AU',
              },
              sameAs: [
                'https://www.facebook.com/donna.gabriel.92',
                'https://www.instagram.com/donna_gabriel/',
                'https://www.linkedin.com/in/donna-gabriel-34693812/',
              ],
              knowsAbout: [
                'Motivational Speaking',
                'Coaching',
                'Workshop Facilitation',
                'Personal Development',
                'Professional Development',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
