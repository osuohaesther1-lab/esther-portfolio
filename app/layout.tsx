import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const instrumentItalic = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-italic",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Esther Osuoha, Full Stack Engineer & Product Designer";
const description =
  "Esther Osuoha is a full stack engineer and UI/UX product designer in Lagos, Nigeria. She designs, builds and ships complete web applications: frontend, backend, databases and authentication.";

export const metadata: Metadata = {
  metadataBase: new URL("https://esther-osuoha.vercel.app"),
  title,
  description,
  keywords: [
    "Esther Osuoha",
    "Full Stack Engineer",
    "Product Designer",
    "UI/UX Designer",
    "Software Engineer Lagos",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Flask",
  ],
  authors: [{ name: "Esther Osuoha", url: "https://github.com/osuohaesther1-lab" }],
  creator: "Esther Osuoha",
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Esther Osuoha",
    locale: "en_NG",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Esther Osuoha, Full Stack Engineer & Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${instrumentItalic.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  );
}
