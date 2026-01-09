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
    icon: "favicon.ico",
    shortcut: "favicon-16x16.png",
    apple: "apple-touch-icon.png",
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
