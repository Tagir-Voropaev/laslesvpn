import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import '../styles/globals.scss'
import '../styles/variables.scss'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game Launcher',
  description: 'Modern game launcher interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} app-wrapper`}>
            {children}
      </body>
    </html>
  )
}