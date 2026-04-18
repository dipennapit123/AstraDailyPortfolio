import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { site } from "@/src/content/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.metadataBaseUrl),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} dark h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-on-surface font-body selection:bg-primary selection:text-on-primary">
        <Navbar />
        <div className="relative flex-1">
          {/* Background Decoration */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 cosmic-dots" />
            <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] nebula-glow" />
            <div className="absolute bottom-[-20%] left-[-10%] h-[800px] w-[800px] nebula-glow opacity-50" />
          </div>
          <div className="relative z-10">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
