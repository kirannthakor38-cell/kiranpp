import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kiran - Full Stack Developer & Designer",
  description: "Advanced portfolio showcasing projects and expertise in web development",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-slate-100">
        {children}
      </body>
    </html>
  )
}
