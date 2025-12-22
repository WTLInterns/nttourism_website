import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize Poppins font with multiple weights and styles
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata = {
  title: 'NT Tourism - Premium Bus Travel Services',
  description: 'Experience luxury bus travel with NT Tourism. Comfortable, safe, and reliable transportation for all your travel needs across India.',
  keywords: 'bus travel, luxury buses, intercity travel, NT Tourism, bus booking, bus rental, coach services',
  author: 'NT Tourism',
  metadataBase: new URL('https://nttourism.com'),
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'NT Tourism - Premium Bus Travel Services',
    description: 'Experience luxury and comfort with our premium bus travel services.',
    url: 'https://nttourism.com',
    siteName: 'NT Tourism',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NT Tourism - Premium Bus Travel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NT Tourism - Premium Bus Travel Services',
    description: 'Experience luxury and comfort with our premium bus travel services.',
    images: ['/images/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#2563eb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-white text-gray-800`}>
        <Toaster position="top-right" />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
