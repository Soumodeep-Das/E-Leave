import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const generateMetadata = (): Metadata => ({
  title: "OffDuty - Manage Time Off Efficiently",
  description: "A tool for tracking employee time off requests.",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <MaxWidthWrapper>
            {children}
          </MaxWidthWrapper>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}