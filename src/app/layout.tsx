import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helverita - Data Visualization Platform",
  description:
    "Discover the power of data visualization with our cutting-edge platform. Transform complex information into beautiful, interactive insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
