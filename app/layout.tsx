import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Description } from "@/config/description";
import RecoilRootProvider from "@/utils/RecoilRebootProvider";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: Description.title,
  description: Description.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
