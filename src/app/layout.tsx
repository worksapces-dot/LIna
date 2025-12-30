import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lina - Your AI Life Assistant",
  description: "Voice-powered AI assistant that manages your calendar, answers questions, controls your computer, and learns your preferences.",
  keywords: ["AI assistant", "voice control", "productivity", "desktop app", "Windows"],
  openGraph: {
    title: "Lina - Your AI Life Assistant",
    description: "Voice-powered AI assistant that manages your calendar, answers questions, controls your computer, and learns your preferences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('your_key_here');

  const content = (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );

  if (hasClerkKey) {
    return (
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#a855f7',
            colorBackground: '#0a0a0a',
            colorText: '#ffffff',
          }
        }}
      >
        {content}
      </ClerkProvider>
    );
  }

  return content;
}
