import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurovia Applied Defense",
  description: "Execution-bound intelligence systems for real-world environments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
