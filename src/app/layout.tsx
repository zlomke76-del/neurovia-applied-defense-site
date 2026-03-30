import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurovia Applied Defense",
  description: "Mission-aligned material systems for real-world deployment.",
  icons: {
    icon: "/asset/images/neurovia_favicon.svg",
    shortcut: "/asset/images/neurovia_favicon.svg",
    apple: "/asset/images/neurovia_favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
