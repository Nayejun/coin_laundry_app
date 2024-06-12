"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import ArrowLeft from "@/assets/icons/userGuide/arrow-left.svg";

interface isAble {
	introduce: boolean;
	price: boolean;
	time: boolean;
	method: boolean;
	[key: string]: boolean;
}

interface isPriceAble {
	distance: boolean;
	laundryPrice: boolean;

	[key: string]: boolean;
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isAble, setIsAble] = useState<isAble>({
		introduce: true,
		price: false,
		time: false,
		method: false,
	});

	const [isPriceAble, setIsPriceAble] = useState<isPriceAble>({
		distance: true,
		laundryPrice: false,
	});

	const [isFixed, setIsFixed] = useState(false);

	const headerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();
	const router = useRouter();

	const navList = [
		{ name: "introduce", text: "서비스 소개" },
		{ name: "price", text: "가격표" },
		{ name: "time", text: "수거시간" },
		{ name: "method", text: "수거방법" },
	];

	const priceList = [
		{ name: "distance", text: "거리별 배송비" },
		{ name: "laundryPrice", text: "세탁 요금" },
	];

	useEffect(() => {
		const handleScroll = () => {
			if (headerRef.current) {
				const headerBottom =
					headerRef.current.getBoundingClientRect().bottom;
				if (headerBottom <= 0) {
					setIsFixed(true);
				} else {
					setIsFixed(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleIsAble = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { name } = e.currentTarget;

		setIsAble({
			introduce: false,
			price: false,
			time: false,
			method: false,
			[name]: true,
		});

		setIsPriceAble({
			distance: false,
			laundryPrice: false,
			[name]: true,
		});

		if (name === "price") {
			router.push("/app/userGuide/price");
			setIsPriceAble({
				distance: true,
				laundryPrice: false,
			});
		}

		const section = document.getElementById(name);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleNavigate = () => {
		router.push("/app/userGuide");

		setIsAble({
			introduce: true,
			price: false,
			time: false,
			method: false,
		});
	};

	return (
		<div className="bg-gray-50 relative">
			<div className=" pt-[20px] pb-[25px] w-[390px] mx-auto relative bg-[#FFF]">
				{pathname === "/app/userGuide" && (
					<div className="flex flex-col justify-between ">
						<header
							ref={headerRef}
							className="px-[20px] flex flex-row justify-between py-2 bg-white"
						>
							<div>로고</div>
							<div>알림</div>
						</header>
						<nav
							style={{
								position: isFixed ? "fixed" : "relative",
								top: isFixed ? 0 : "auto",
								width: "390px",
								zIndex: 100,
								borderBottom: isFixed ? "1px solid #ddd" : "none",
								backgroundColor: "white",
							}}
							className="flex flex-row justify-between"
						>
							{navList.map((nav) => (
								<button
									key={nav.name}
									name={nav.name}
									className={`text-body-2-normal py-3 w-full border-b-2 bg-white ${
										isAble[nav.name]
											? "text-primary-normal border-primary-normal"
											: "text-label-alternative border-line-normal"
									}`}
									onClick={handleIsAble}
								>
									<p className="px-3">{nav.text}</p>
								</button>
							))}
						</nav>

						<div>{children}</div>
					</div>
				)}
				{pathname === "/app/userGuide/price" && (
					<div className="flex flex-col justify-between ">
						<header
							ref={headerRef}
							className="px-[20px] flex flex-row justify-between py-2 bg-white"
						>
							<div onClick={handleNavigate}>
								<ArrowLeft />
							</div>
							<p className=" text-static-black text-lg font-semibold">
								가격표
							</p>
							<div />
						</header>
						<nav
							// style={{
							// 	position: isFixed ? "fixed" : "relative",
							// 	top: isFixed ? 0 : "auto",
							// 	width: "390px",
							// 	zIndex: 100,
							// 	borderBottom: isFixed ? "1px solid #ddd" : "none",
							// 	backgroundColor: "white",
							// }}
							className=" px-5 flex flex-row justify-between"
						>
							{priceList.map((nav) => (
								<button
									key={nav.name}
									name={nav.name}
									className={`  text-body-2-normal py-3 w-full border-b-2 bg-white ${
										isPriceAble[nav.name]
											? "text-primary-normal border-primary-normal"
											: "text-label-alternative border-line-normal"
									}`}
									onClick={handleIsAble}
								>
									<p className="px-3">{nav.text}</p>
								</button>
							))}
						</nav>

						<div>{children}</div>
					</div>
				)}
			</div>
		</div>
	);
}
