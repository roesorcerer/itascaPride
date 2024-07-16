import { Inter } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Pocket',
    default: 'Itasca Pride',
  },
  description: 'Pride run through Itasca County Minnesota.',
  icons: {
    icon: '/rainbowflag.ico', // Set the path to your favicon
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <head>
        <link rel="icon" href="/rainbowflag.ico" />{' '}
        {/* This ensures the favicon is referenced */}
      </head>
      <body>{children}</body>
    </html>
  )
}
