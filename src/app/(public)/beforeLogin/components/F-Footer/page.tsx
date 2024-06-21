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

const routes = [
    { path: "/", label: "홈", IconOn: HomeOn, IconOff: HomeOff },
    { path: "/team-discount", label: "팀, 알뜰 세탁", IconOn: MageboxOn, IconOff: MageboxOff },
    { path: "/laundry-status", label: "내 빨래 현황", IconOn: MapClothingStoreOn, IconOff: MapClothingStoreOff },
    { path: "/profile", label: "마이페이지", IconOn: ProfileOn, IconOff: ProfileOff },
];

export default function AppFooter() {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-interaction-inactive flex justify-around items-center h-16 w-full max-w-[430px] rounded-t-md z-40">
            <div className="flex w-full justify-between px-6">
                {routes.map((route) => (
                    <button
                        key={route.path}
                        onClick={() => handleNavigation(route.path)}
                        className="flex flex-col items-center flex-1"
                    >
                        {pathname === route.path ? (
                            <route.IconOn className="w-[24px] h-[24px] mb-1" />
                        ) : (
                            <route.IconOff className="w-[24px] h-[24px] mb-1" />
                        )}
                        <span
                            className={`text-xs ${
                                pathname === route.path
                                    ? "text-label-neutral"
                                    : "text-interaction-inactive"
                            }`}
                        >
                            {route.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
