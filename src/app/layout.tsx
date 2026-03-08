import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyprlan — The Premier Hackathon for Builders",
  description:
    "Hyprlan is a premier hackathon community event bringing together developers, designers, and innovators to build the future. Join us for an unforgettable 48-hour experience in Bangalore, India.",
  icons: [{ rel: "icon", url: "/logo.jpeg" }],
  openGraph: {
    title: "Hyprlan — The Premier Hackathon for Builders",
    description:
      "Join Hyprlan — a 48-hour hackathon where builders, designers, and innovators come together to create groundbreaking projects.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
