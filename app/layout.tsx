import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.agentcorp.work"),
  title: {
    default: "AgentCorp Blog",
    template: "%s | AgentCorp Blog",
  },
  description:
    "Field notes on building an AI workforce operators can trust with the work that actually matters.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "AgentCorp Blog",
    title: "AgentCorp Blog",
    description: "Ideas for operating the agentic company.",
    url: "/",
  },
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
