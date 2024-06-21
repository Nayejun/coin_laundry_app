"use client";

import localFont from "next/font/local";
import { AuthProvider } from "@/context/AuthContext";
import { RecoilRoot } from "recoil";
import Head from "next/head";  // Import Head from next/head
import "@/app/global.css"

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <body className={`${pretendard.className} min-h-screen`}>
          <RecoilRoot>{children}</RecoilRoot>
        </body>
      </html>
    </AuthProvider>
  );
}
