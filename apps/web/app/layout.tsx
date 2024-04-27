import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@tss-next-ui/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TSS-Next",
  description: "All-in-one type-safe Next.js template",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
