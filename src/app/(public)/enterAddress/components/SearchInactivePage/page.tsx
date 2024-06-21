"use client";
import React, { FC, useEffect, useState } from "react";
import SearchInactive from "@/app/(public)/enterAddress/components/SearchInactive/page";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import { useRouter } from "next/navigation";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";

interface SearchInactivePageProps {
	handleBackNavigation?: () => void;
	handleActivate: () => void;
}

const SearchInactivePage: FC<SearchInactivePageProps> = ({
	handleActivate,
}) => {
	const router = useRouter(); // Initialize the router
	const [receiverName, setReceiverName] = useState("");
	const [shippingName, setShippingName] = useState("");

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/receiverName"); // Navigate to the previous page
	};

	useEffect(() => {
		const savedReceiverName =
			localStorage.getItem("receiverName") || "";
		const savedShippingName =
			localStorage.getItem("shippingName") || "";
		setReceiverName(savedReceiverName);
		setShippingName(savedShippingName);
	}, []);

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col pb-[16px]">
				<ProgressBar progress={37.5} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				/>
				<div className="mb-[16px]"></div>
				<div className="w-full max-w-[430px] px-[24px]">
					<div className="mb-[8px] text-label-1-normal font-semibold text-label-normal text-left">
						배송 받으실 주소
					</div>
				</div>
				<div className="w-full max-w-[430px] bg-white px-[24px]">
					<SearchInactive
						onClick={handleActivate}
						onClickDetail={handleActivate}
					/>
				</div>
			</div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px] ">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
			</div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					받는 분
				</div>
				<InputStatic value={receiverName} />
			</div>
			{/**/}
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
		</div>
	);
};

export default SearchInactivePage;
