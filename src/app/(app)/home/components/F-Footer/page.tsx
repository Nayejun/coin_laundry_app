"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import HomeOn from "@/assets/icons/footer/home-on.svg";
import HomeOff from "@/assets/icons/footer/home-off.svg";
import MageboxOn from "@/assets/icons/footer/magebox-on.svg";
import MageboxOff from "@/assets/icons/footer/magebox-off.svg";
import MapClothingStoreOn from "@/assets/icons/footer/map-clothing-store-on.svg";
import MapClothingStoreOff from "@/assets/icons/footer/map-clothing-store-off.svg";
import ProfileOn from "@/assets/icons/footer/profile-on.svg";
import ProfileOff from "@/assets/icons/footer/profile-off.svg";

export default function AppFooter() {
	const pathname = usePathname();
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg flex justify-around items-center h-16 w-[390px]  rounded-md z-40">
			<div className="flex w-full justify-between px-6">
				<button
					onClick={() => handleNavigation("/")}
					className="flex flex-col items-center flex-1"
				>
					{pathname === "/" ? (
						<HomeOn className="w-6 h-6 mb-1" />
					) : (
						<HomeOff className="w-6 h-6 mb-1" />
					)}
					<span
						className={`text-xs ${
							pathname === "/app/home/mainView"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						홈
					</span>
				</button>
				<button
					onClick={() => handleNavigation("/app/magebox")}
					className="flex flex-col items-center flex-1"
				>
					{pathname === "/app/magebox" ? (
						<MageboxOn className="w-6 h-6 mb-1" />
					) : (
						<MageboxOff className="w-6 h-6 mb-1" />
					)}
					<span
						className={`text-xs ${
							pathname === "/app/magebox"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						수거신청
					</span>
				</button>
				<button
					onClick={() => handleNavigation("/app/mapClothingStore")}
					className="flex flex-col items-center flex-1"
				>
					{pathname === "/app/mapClothingStore" ? (
						<MapClothingStoreOn className="w-6 h-6 mb-1" />
					) : (
						<MapClothingStoreOff className="w-6 h-6 mb-1" />
					)}
					<span
						className={`text-xs ${
							pathname === "/app/mapClothingStore"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						내 빨래 현황
					</span>
				</button>
				<button
					onClick={() => handleNavigation("/app/profile")}
					className="flex flex-col items-center flex-1"
				>
					{pathname === "/app/profile" ? (
						<ProfileOn className="w-6 h-6 mb-1" />
					) : (
						<ProfileOff className="w-6 h-6 mb-1" />
					)}
					<span
						className={`text-xs ${
							pathname === "/app/profile"
								? "text-primary"
								: "text-gray-400"
						}`}
					>
						마이페이지
					</span>
				</button>
			</div>
		</div>
	);
}
