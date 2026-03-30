import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurovia Applied Defense",
  description: "Mission-aligned material systems for real-world deployment.",
  icons: {
    icon: "/assets/neurovia_favicon.svg",
    shortcut: "/assets/neurovia_favicon.svg",
    apple: "/assets/neurovia_favicon.svg",
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
