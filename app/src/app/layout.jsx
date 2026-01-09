import "./globals.css";
import "./fonts.css";

import { getSite } from "@/lib/fetch";

import { DeviceProvider } from "@/context/DeviceContext";

export const dynamic = "force-dynamic";

const [site] = await Promise.all([getSite()]);

export const metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  openGraph: {
    title: site.title,
    siteName: site.title,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <DeviceProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </DeviceProvider>
  );
}
