import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentCorp Blog | Autonomy is the easy part",
  description:
    "AgentCorp blog post 01, prepared as the Blog tab companion for agentcorp.work.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
