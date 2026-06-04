import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play and sip | Interactive social cafe in Beirut",
  description: "Play and sip: A community-centric cafe open deep into the night, combining custom beverage menus with a social, interactive setting.",
  keywords: [
  "Play and sip Beirut",
  "playandsip Beirut",
  "social cafe Beirut",
  "games cafe Beirut"
],
  openGraph: {
    title: "Play and sip | Interactive social cafe in Beirut",
    description: "Play and sip: A community-centric cafe open deep into the night, combining custom beverage menus with a social, interactive setting.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="image" href="/sequence/frame_001.webp" />
        <link rel="preload" as="image" href="/sequence/frame_002.webp" />
        <link rel="preload" as="image" href="/sequence/frame_003.webp" />
        <link rel="preload" as="image" href="/sequence/frame_004.webp" />
        <link rel="preload" as="image" href="/sequence/frame_005.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
