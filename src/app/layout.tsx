"use client";

import localFont from "next/font/local";
import { AuthProvider } from "@/context/AuthContext";
import { RecoilRoot } from "recoil";
import "@/app/global.css";

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
				<body className={`${pretendard.className} min-h-screen`}>
					<RecoilRoot>{children}</RecoilRoot>
				</body>
			</html>
		</AuthProvider>
	);
}
