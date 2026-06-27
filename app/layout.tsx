import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const title = "NISTOR LAZAR – Mediator Autorizat în Republica Moldova";
const description = "Rezolvă conflictele fără procese lungi și costisitoare. Mediere rapidă, confidențială și eficientă pentru persoane fizice și companii.";
export const metadata: Metadata = { metadataBase: new URL("https://nistor-lazar.md"), title, description, keywords: ["mediator autorizat", "mediere Moldova", "Nistor Lazar", "conflicte familiale", "litigii civile", "mediere comercială"], alternates: { canonical: "/" }, manifest: "/manifest.webmanifest", icons: { icon: "/icon.svg", apple: "/icon.svg" }, openGraph: { title, description, url: "https://nistor-lazar.md", siteName: "NISTOR LAZAR", locale: "ro_MD", type: "website", images: [{ url: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85", width: 1200, height: 630, alt: title }] }, twitter: { card: "summary_large_image", title, description } };
export const viewport: Viewport = { themeColor: "#0F172A", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {return <html lang="ro" className={inter.variable}><body>{children}</body></html>;}
