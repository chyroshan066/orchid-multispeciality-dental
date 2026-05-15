import "./globals.css"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { Header } from "@/components/Header/Header";
import { BackToTop } from "@/components/BackToTop/BackToTop";
import { Footer } from "@/components/Footer/Footer";
import { dentalServicesStructuredData, dentalClinicStructuredData, dentalSpecialtiesStructuredData } from "@/constants";
import { ActionBtn } from "@/components/ActionBtn/ActionBtn";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-roboto'
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Orchid Multispeciality Dental Clinic - Advanced Dental Care in Nepal",
  description: "Orchid Multispeciality Dental Clinic offers comprehensive dental care in Kathmandu & Damak, Nepal. Expert dentists providing treatments such as dental implants, braces, root canal therapy, cosmetic dentistry, teeth whitening, and preventive oral care in a modern, comfortable clinic.",
  keywords: [
    "Orchid Dental",
    "dental clinic",
    "dentist Kathmandu",
    "dentist Damak",
    "dental implants Kathmandu",
    "dental implants Damak",
    "braces Kathmandu",
    "braces Damak",
    "cosmetic dentistry Kathmandu",
    "cosmetic dentistry Damak",
    "root canal Kathmandu",
    "root canal Damak",
    "teeth whitening Kathmandu",
    "teeth whitening Damak",
    "orthodontics Kathmandu",
    "orthodontics Damak",
    "best dentist Kathmandu",
    "best dentist Damak",
    "dental care Nepal",
    "oral surgery Kathmandu",
    "oral surgery Damak",
    "family dentist Kathmandu",
    "family dentist Damak",
    "tooth extraction Kathmandu",
    "tooth extraction Damak",
    "dental checkup Kathmandu",
    "dental checkup Damak",
    "gum treatment Kathmandu",
    "gum treatment Damak",
    "pediatric dentist Kathmandu",
    "pediatric dentist Damak",
    "affordable dental care Kathmandu",
    "affordable dental care Damak",
    "emergency dental Kathmandu",
    "emergency dental Damak",
    "dental hygiene Kathmandu",
    "dental hygiene Damak",
    "Orchid Dental Nepal"
  ],
  authors: [{ name: "Orchid Multispeciality Dental" }],
  creator: "Orchid Multispeciality Dental",
  publisher: "Orchid Multispeciality Dental",
  metadataBase: new URL("https://www.orchidmultispecialitydental.com.np"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Orchid Multispeciality Dental Clinic - Advanced Dental Care in Nepal",
    description: "Expert dentists in Kathmandu & Damak offering dental implants, braces, root canals, cosmetic dentistry, and preventive care in a modern, patient-friendly clinic.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}`,
    siteName: "Orchid Multispeciality Dental",
    images: [
      {
        url: `${baseURL}/images/preview.webp`,
        width: 1200,
        height: 630,
        alt: "Orchid Multispeciality Dental Clinic Preview",
      }
    ],
  },
  category: "health",
  classification: "Dental Clinic",
  referrer: "origin-when-cross-origin",
  applicationName: "Orchid Multispeciality Dental",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          // "dangerouslySetInnerHTML" is a way to inject raw HTML content into a React component.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentalServicesStructuredData),  // "__html" property accepts raw HTML/text
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentalClinicStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dentalSpecialtiesStructuredData),
          }}
        />
        {/* Verification tags if needed */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>

      <body
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
        id="top"
      >
        <Header />
        {children}
        <Footer />
        <ActionBtn
          ionIconLink="/#contact"
          ionIconName="calendar-outline"
          style={{ backgroundColor: "var(--bright-teal)" }}
          className="bottom-[120px]! md:bottom-[180px]!"
        />
        <ActionBtn
          ionIconLink="https://wa.me/9779819239757"
          ionIconName="logo-whatsapp"
          style={{ backgroundColor: "#46c754" }}
          className="bottom-[70px]! md:bottom-[130px]!"
          target="_blank"
        />
        <BackToTop />

        <IonicScripts />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
