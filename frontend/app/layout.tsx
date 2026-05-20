import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hurkify.com"),
  title: {
    default: "Hurkify Technology Limited | Smart Technology Solutions",
    template: "%s | Hurkify Technology Limited",
  },
  description:
    "Hurkify Technology Limited helps organizations, healthcare institutions, and businesses modernize operations through IT consulting, software development, health-tech, and digital transformation.",
  keywords: [
    "Hurkify Technology Limited",
    "IT consulting Nigeria",
    "healthcare technology Nigeria",
    "HEFAMAA registration support",
    "EMR systems",
    "software development Lagos",
    "digital transformation",
  ],
  openGraph: {
    title: "Hurkify Technology Limited",
    description:
      "Smart digital systems, IT consulting, software development, healthcare compliance support, EMR solutions, and cloud technical support.",
    url: "https://hurkify.com",
    siteName: "Hurkify Technology Limited",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurkify Technology Limited",
    description:
      "Modern IT consulting, software development, health-tech, and digital transformation solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
